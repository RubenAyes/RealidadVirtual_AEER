var camara = new THREE.OrtographicCamera();

camara.left = window.innerWidth / -2;
camara.right = window.innerWidth / 2;
camara.top = window.innerHeigth / 2;
camara.bottom = window.innerHeigth / -2;
camara.near = 0.1;
camara.far = 1000;
camara.updateProjectionMatrix();

camara.position.z = 100;

var cubo = new THREE.Mesh( new THREE.BoxGeometry(30, 30, 30 ),
                           new THREE.MeshNormalMateral() );
cubo.rotateY(Math.PI/4);
