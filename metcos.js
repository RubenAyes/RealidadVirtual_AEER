function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('RubenAyes.github.io/plasma.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var figura = new THREE.Shape();

figura.moveTo(40, 20);
figura.lineTo(40, 50);
figura.lineTo(50, 50);
figura.lineTo(50, 60);
figura.lineTo(20, 60);
figura.lineTo(20, 70);
figura.lineTo(50, 70);
figura.lineTo(50, 90);
figura.lineTo(30, 90);
figura.lineTo(30, 110);
figura.lineTo(40, 110);
figura.lineTo(40, 100);
figura.lineTo(70, 100);
figura.lineTo(70, 110);
figura.lineTo(80, 110);
figura.lineTo(80, 90);
figura.lineTo(60, 90);
figura.lineTo(60, 70);
figura.lineTo(90, 70);
figura.lineTo(90, 60);
figura.lineTo(60, 60);
figura.lineTo(60, 50);
figura.lineTo(70, 50);
figura.lineTo(70, 20);
figura.lineTo(40, 20);

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
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
camara.position.z = 350;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
