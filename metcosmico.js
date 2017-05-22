function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('RubenAyes.github.io/acero.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});

var forma = new THREE.TorusGeometry( 25, 5, 16, 100 );
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

malla.rotation.x += 0.1;
malla.rotation.y += 0.1;

renderer.render(escena, camara);
}
var camara, escena, renderer, malla;
setup()
loop();
