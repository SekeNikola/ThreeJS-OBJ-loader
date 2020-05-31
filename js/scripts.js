let camera, scene, render

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3e3e3e)

    camera = new THREE.PerspectiveCamera(0.5, window.innerWidth / window.innerHeight, 1, 5000)
    camera.rotation.y = 10 / 180 * Math.PI
    camera.position.x = 600
    camera.position.y = 0
    camera.position.z = 0
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    document.body.appendChild(renderer.domElement)
    
    keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);
    scene.add(keyLight);
    
    fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);
    scene.add(fillLight);
    
    backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();
    scene.add(backLight);
    
    
    
    let objLoader = new THREE.OBJLoader();
    objLoader.load('/3d-obj-loader/assets/Helmet.obj', function (object) {
    scene.add(object);
    });
    
    
   function animate () {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    
    animate();
}

init()

