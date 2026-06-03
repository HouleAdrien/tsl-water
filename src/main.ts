import * as THREE from 'three/webgpu';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setPixelRatio(Math.max(window.devicePixelRatio ,2.0));
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
} );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.background = new THREE.Color(0,0,0);

camera.position.z = 5;

await renderer.init();

function animate(time :number ) {

  /*
  camera.position.x =  10* Math.sin((time/1000)) ;
  camera.position.z =  10 * Math.cos((time/1000));
  camera.lookAt(cube.position);*/

  renderer.render( scene, camera );

}

