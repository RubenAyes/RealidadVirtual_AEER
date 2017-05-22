function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('RubenAyes.github.io/plasma.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var forma= new THREE.SphereGeometry( 20, 32, 32 );
malla = new THREE.Mesh(forma, material);


escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 101;
camara.position.z = 50;
camara.position.z = 50;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop() {
requestAnimationFrame(loop);

malla.rotation.x += .01;
malla.rotation.y += .01;
malla.rotation.z += .01;
  

renderer.render(escena, camara);
}
var camara, escena, renderer, malla;
setup()
loop();
camara.position.z = 70;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
