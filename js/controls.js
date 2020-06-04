//DOM SELECTIONS
const stage = document.querySelector(".orbital-controls");
// const increment = document.querySelector(".increment");
// const decrement = document.querySelector(".decrement");
// const reset = document.querySelector(".resetSettings");

//3D GRAPHIC SETUP
let scene, camera, renderer, cube, controls;
let ADD = 0.01;

// CREATING EVENT HANDLERS
// const increaseRotationSpeed = () => {
// 	controls.rotateSpeed += 1;
// 	controls.update();
// };

// const decreaseRotationSpeed = () => {
// 	controls.rotateSpeed -= 1;
// 	controls.update();
// };

// const resetControls = () => {
// 	console.log("Resettttttttt");
// 	controls.reset();
// 	controls.update();
// };

//CREATING A SHAPE
const createGeometry = () => {
	let material, texture, geometry;

	// Adding Texture
	// texture = new THREE.TextureLoader().load(
	// 	"https://cors-anywhere.herokuapp.com/dxgh891opzso3.cloudfront.net/files/5/9/6/9/2/shutterstock_1045743757.jpg?height=2000&width=3000"
	// );

	material = new THREE.MeshBasicMaterial({ color: 0x05386b, wireframe: true });

	//Creating the cube
	geometry = new THREE.BoxGeometry(5, 5, 5);
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
};

// INITIALIZING THE SCENE

const init = () => {
	//CREATING A NEW SCENE
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x5cdb95);

	//SETTING UP THE CAMERA
	camera = new THREE.PerspectiveCamera(
		75,
		stage.offsetWidth / stage.offsetHeight,
		1,
		1000
	);
	camera.position.z = 20;

	//CREATING A SHAPE
	createGeometry();

	//RENDERING THE SCENE AND THE CAMERA
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(stage.offsetWidth, stage.offsetHeight);
	stage.appendChild(renderer.domElement);

	// SETTING UP ORBIT CONTROLS
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.rotateSpeed = 1;
	controls.update();

	//SETTING UP EVENT HANDLERS
	// increment.addEventListener("click", increaseRotationSpeed);
	// decrement.addEventListener("click", decreaseRotationSpeed);
	// reset.addEventListener("click", resetControls);
};

const animate = () => {
	// cube.rotation.x += ADD;
	// cube.rotation.z += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};

//Initializing 3D Graphic
init();

//Making the 3D Graphic Responsive
window.addEventListener("resize", () => {
	renderer.setSize(stage.offsetWidth, stage.offsetHeight);
	camera.aspect = stage.offsetWidth / stage.offsetHeight;
	camera.updateProjectionMatrix();
});

animate();
