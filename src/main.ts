import { hash, uniform, vec3, instanceIndex, float } from 'three/tsl';
import * as THREE from 'three/webgpu';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const material = new THREE.MeshBasicNodeMaterial();

const seed = uniform(float(0));

const r = hash(instanceIndex.add(seed));
const g = hash(instanceIndex.add(seed).add(1));
const b = hash(instanceIndex.add(seed).add(2));

material.colorNode = vec3(r, g, b);

const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const count = 10;
const radius = 3;
const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.InstancedMesh(geometry, material, count);

const dummy = new THREE.Object3D();
for (let i = 0; i < count; i++) {
  const angle = (i / count) * Math.PI * 2;
  dummy.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
  dummy.updateMatrix();
  cube.setMatrixAt(i, dummy.matrix);
}
cube.instanceMatrix.needsUpdate = true;
scene.add(cube);
scene.background = new THREE.Color(0, 0, 0);

camera.position.z = 5;

await renderer.init();

function animate(time: number) {
  seed.value = time / 100;

  renderer.render(scene, camera);
}