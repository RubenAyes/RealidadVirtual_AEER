function setup (){
THREE.ImageUtils.crossOrigin = '';
var textura =THREE.ImageUtils.loadTexture('RubenAyes.github.io/plasma.jpg');
var material = new THREE.MeshBasicMaterial({map: textura});
var figura = new THREE.Shape();


figura.moveTo(400, 200);
figura.lineTo(400, 500);
figura.lineTo(500, 500);
figura.lineTo(500, 600);
figura.lineTo(200, 600);
figura.lineTo(200, 700);
figura.lineTo(500, 700);
figura.lineTo(500, 900);
figura.lineTo(300, 900);
figura.lineTo(300, 1100);
figura.lineTo(400, 1100);
figura.lineTo(400, 1000);
figura.lineTo(700, 1000);
figura.lineTo(700, 1100);
figura.lineTo(800, 1100);
figura.lineTo(800, 900);
figura.lineTo(600, 900);
figura.lineTo(600, 700);
figura.lineTo(900, 700);
figura.lineTo(900, 600);
figura.lineTo(600, 600);
figura.lineTo(600, 500);
figura.lineTo(700, 500);
figura.lineTo(700, 200);
figura.lineTo(400, 200);
  
var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
malla = new THREE.Mesh(forma, material);


escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 1010;

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
camara.position.z = 3500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
