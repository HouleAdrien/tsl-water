import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { vec3, time, positionLocal, Fn, cross, normalize } from 'three/tsl';
import * as THREE from 'three/webgpu';

import type { Node } from 'three/webgpu';


type PosParams = { position: Node<'vec3'> };
type FloatParams = { value: Node<'float'> };

const oscSine = Fn( ( {value}:FloatParams ) => {

	return value.add( 0.75 ).mul( Math.PI * 2 ).sin().mul( 0.5 ).add( 0.5 );

} );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const material = new THREE.MeshPhysicalNodeMaterial();

export const WaveDisplace = Fn(({ position }: PosParams) => {
  const tempPos = vec3(position);

  const dist = position.x.mul(position.x)
  .add(position.y.mul(position.y))
  .sqrt();
  const speed = 1;
  const wave = oscSine({ value: dist.add(time.mul(speed)) });
 const amplitude = 0.5; 
  tempPos.z.assign(wave.mul(amplitude));
  return tempPos;
});

material.positionNode = WaveDisplace( { position: positionLocal } );

export const WaveNormal = Fn(({ position }: PosParams) => {
  
  const eps = 0.01;
  // on décale pour calculer par rapport a la pente 
  const P0 = WaveDisplace({ position });
  const Px = WaveDisplace({ position: position.add(vec3(eps, 0, 0)) });
  const Py = WaveDisplace({ position: position.add(vec3(0, eps, 0)) });

  const T1 = Px.sub(P0); 
  const T2 = Py.sub(P0); 

  return normalize(cross(T1, T2));
});

material.normalNode = WaveNormal( { position: positionLocal } );

material.colorNode = vec3(1, 0.5, 0.2);

const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(1, 1, 1);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const geometry = new THREE.PlaneGeometry(32,32, 256, 256);
const plane = new THREE.Mesh(geometry, material);

scene.add(plane);
scene.background = new THREE.Color(0, 0, 0);

camera.position.z = 5;

 const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

await renderer.init();

renderer.setAnimationLoop(animate);
function animate(/* time: number */) {
  controls.update();
  renderer.render(scene, camera);
}