import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from 'three/examples/jsm/libs/stats.module'
    
function ThreeModel() {
    const refContainer = useRef(null);
    useEffect(() => {
        // ply file display

    //     const scene = new THREE.Scene();
    // // scene.add(new THREE.AxesHelper(5));

    // const light = new THREE.SpotLight();
    // light.position.set(20, 20, 20);
    // scene.add(light);
    // scene.background = new THREE.Color("#dedef0");
    // const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 15;

    // // Check if renderer already exists, if not, create and append it
    // let renderer = new THREE.WebGLRenderer();
    // if (!document.getElementById('renderer-container')) {
    //   renderer.setSize(window.innerWidth/1.2, window.innerHeight / 1.5);
    //   renderer.domElement.id = 'renderer-container';
    //   document.body.appendChild(renderer.domElement);
    // }

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // var material = new THREE.MeshBasicMaterial({ color: 0x0bfb40 });
    // var geometry = new THREE.BoxGeometry(4, 4, 4);
    //     var cube = new THREE.Mesh(geometry, material);
    //     cube.position.set(0, 0, 0);
    //     cube.scale.set(2, 2, 2);
    //     scene.add(cube);
    //     camera.position.z = 10;
    //     var animate = function () {
    //         requestAnimationFrame(animate);
    //         // cube.rotation.x += 0.01;
    //         // cube.rotation.y += 0.01;
    //         renderer.render(scene, camera);
    //     };

    // animate();
    // till here safer code
    
    let renderer = new THREE.WebGLRenderer();
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('window');
    if (!document.getElementById('renderer-container')) {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth/1.7, window.innerHeight / 1.7);
      // renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.domElement.id = 'renderer-container';
      container.appendChild(renderer.domElement);
    }

    const scene = new THREE.Scene();
    scene.background=new THREE.Color(0x72645b);
    // scene.fog=new THREE.Fog(0x72645b, 2, 15);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth/ window.innerWidth,
      0.1,
      1000
    )
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableDamping = true

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper)
    camera.position.set(0,2,5)
    
    
    const gridHelper=new THREE.GridHelper(30);
    scene.add(gridHelper)

    const boxGeometry=new THREE.BoxGeometry();
    const boxMaterial=new THREE.MeshBasicMaterial({color: 0x00FF00});
    const box=new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    const planeGeometry=new THREE.PlaneGeometry(30,30)
    const planeMaterial=new THREE.MeshBasicMaterial({color: 0xFFFFFF});
    const plane=new THREE.Mesh(planeGeometry, planeMaterial)
    scene.add(plane);
    plane.rotation.x= -0.5 * Math.PI
    
    const plyLoader= new PLYLoader();
    
    plyLoader.load('Bearded guy.ply', function(geometry) {
      geometry.computeVertexNormals();

      var material=new THREE.MeshStandardMaterial({
        wireframe: true
      });

      var mesh= new THREE.Mesh(geometry, material);

      mesh.position.y=0
      mesh.position.x=0
      mesh.position.z=0

      console.log("mesh details:",mesh)
      scene.add(mesh);
    });
    const loader = new PLYLoader();
    loader.load(
      'Bearded guy.ply',
      function (geometry) {
          geometry.computeVertexNormals()
          var material=new THREE.MeshStandardMaterial({
            wireframe: true
          });
          const mesh = new THREE.Mesh(geometry, material)
          mesh.rotateX(-Math.PI / 2)
          // mesh.position.y=0
          // mesh.position.x=0
          // mesh.position.z=0
          scene.add(mesh)
      },
      (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
          console.log(error)
      }
  )
    function animate(){
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;
      orbit.update();
      renderer.render(scene, camera)
    }
    
    renderer.setAnimationLoop(animate);

    //from here not working code
    // const loader = new PLYLoader();
    // loader.load(
    //     '/home/chaitanyasai/Downloads/bearded-guy-ply',
    //     function (geometry) {
    //         geometry.computeVertexNormals()
    //         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
    //         const mesh = new THREE.Mesh(geometry, material)

    //         //
    //         var boundingBox = new THREE.Box3().setFromObject(mesh);
    //         var center = new THREE.Vector3();
    //         boundingBox.getCenter(center);
    //         mesh.position.sub(center)
    //         //
    //         // Set a scaling factor (e.g., 2 for doubling the size)
    //         var scaleFactor = 2;

    //         // Apply the scaling to the model
    //         mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    //         mesh.rotateX(-Math.PI / 2)
    //         scene.add(mesh)
    //         console.log('visibility:',mesh.visible)
    //         console.log(scene.add(mesh))
    //         var modelCenter = new THREE.Vector3();
    //         boundingBox.getCenter(modelCenter);

    //         // Assuming you're using OrbitControls for camera interaction
    //         var controls = new OrbitControls(camera, renderer.domElement);
            
    //         // Set the camera's position and target to center on the model
    //         camera.position.copy(modelCenter.clone().add(new THREE.Vector3(0, 0, boundingBox.getSize().z))); // adjust as needed
    //         controls.target.copy(modelCenter);
    //     },
    //     (xhr) => {
    //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )
    // window.addEventListener('resize', onWindowResize, false)
    // function onWindowResize() {
    //   if (!document.getElementById('renderer-container')) return;
    //   camera.aspect = window.innerWidth / window.innerHeight
    //   camera.updateProjectionMatrix()
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    //   render()
    // }
    // function animate() {
    //     requestAnimationFrame(animate)
    
    //     controls.update()
    
    //     render()
    // }
    
    // function render() {
    //     renderer.render(scene, camera)
    // }
    
    // animate()


    // var group = new THREE.Object3D();
    
    // const loader = new PLYLoader();
    // loader.load( 'meshed-poisson.ply', function ( geometry ) {

    //     geometry.computeVertexNormals();
    //     var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200} );
        
    //     const mesh = new THREE.Mesh( geometry, material );

    //     mesh.position.x = - 0.2;
    //     mesh.position.y = - 0.52;
    //     mesh.position.z = - 0.0;
    //     mesh.scale.multiplyScalar( 0.0006 );

    //     mesh.castShadow = true;
    //     mesh.receiveShadow = true;

    //     scene.add( mesh );

    // } );
    // Cleanup function to remove the renderer when the component unmounts
    return () => {
      if (document.getElementById('renderer-container')) {
        document.getElementById('renderer-container').remove();
      }
    };
  }, []);

  return (
  <div ref={refContainer} style={{margin: '10px 10px 10px 10px'}}></div>
  );
}

export default ThreeModel;