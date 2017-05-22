function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('RubenAyes.github.io/cosmico.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var forma = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
malla = new THREE.Mesh(forma, material);


escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 101;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop() {
requestAnimationFrame(loop);

malla.rotation.x += 0;
malla.rotation.y += 0;

renderer.render(escena, camara);
}
var camara, escena, renderer, malla;
setup()
loop();
