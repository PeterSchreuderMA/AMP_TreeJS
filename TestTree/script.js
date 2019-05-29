let width = window.innerWidth;
let height = window.innerHeight;

let scene, camera, renderer;

let earth;

let imageRoot = "images/";

let skybox;

let solarSystem = [];

let planet_name = ["Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus"];

let dplanet_istanceRelToEarth = [0,0.3870320856,0.7229946524,1,1.523640642,5.203001337,9.538997326,19.18889162];

let planet_diameterRelToEarth = [5,0.3824082785,0.9488867984,1,0.5326121041,11.20915648,9.449357165,4.007369081];

let textures = ["sunmap.jpg","mercurymap.jpg","venusmap.jpg","earthmap1k.jpg","mars_1k_color.jpg","jupitermap.jpg","saturnmap.jpg","uranusmap.jpg","neptunemap.jpg"]




function setUp()
{
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  //Setup - Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);






  earth = new Model(new THREE.Vector3(0, 0, -20), imageRoot + 'earthmap1k.jpg');

  scene.add(earth);

  earth.position.z = -20;


  animate();

}

function animate()
{
  requestAnimationFrame(animate);

  earth.rotation.y -= 0.01;

  earth.position.setFromSphericalCoords(1, 10, earth.rotation.y);
  earth.position.setFrom

  renderer.render(scene, camera);

}



setUp();