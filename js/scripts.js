// let camera, scene, render

// function init(){
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x3e3e3e)

//     camera = new THREE.PerspectiveCamera(0.5, window.innerWidth / window.innerHeight, 1, 5000)
//     camera.rotation.y = 10 / 180 * Math.PI
//     camera.position.x = 600
//     camera.position.y = 0
//     camera.position.z = 0

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     controls = new THREE.OrbitControls(camera, renderer.domElement);
//     document.body.appendChild(renderer.domElement)

//     keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
//     keyLight.position.set(-100, 0, 100);
//     scene.add(keyLight);

//     fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
//     fillLight.position.set(100, 0, 100);
//     scene.add(fillLight);

//     backLight = new THREE.DirectionalLight(0xffffff, 1.0);
//     backLight.position.set(100, 0, -100).normalize();
//     scene.add(backLight);



//     let objLoader = new THREE.OBJLoader();
//     objLoader.load('/3d-obj-loader/assets/Helmet.obj', function (object) {
//     scene.add(object);
//     });


//    function animate () {
//         requestAnimationFrame(animate);
//         controls.update();
//         renderer.render(scene, camera);
//     };

//     animate();
// }

// init()



// R2D2
scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 200;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);
scene.add(keyLight);

fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
scene.add(fillLight);

backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
scene.add(backLight);

mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/3d-obj-loader/assets/');
mtlLoader.load('/3d-obj-loader/assets/r2-d2.mtl', function (materials) {

    materials.preload();

    objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('/3d-obj-loader/assets/r2-d2.obj', function (object) {

        scene.add(object);
        object.position.y -= 60;

    });

});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();