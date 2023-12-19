import React, { useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import './Model.css';
import * as THREE from 'three';
import Face from './Object.jsx';
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei'
import { useGLTF, Stage, PresentationControls } from "@react-three/drei"
// function Conc(){
//     const obj = useLoader(OBJLoader, process.env.PUBLIC_URL+"meshed-poisson.obj");
    
//     return(
//         <>
//             <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45} />
//             <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
//             <Face />
//             {/* <mesh>
//                 <boxGeometry args={[1,1,1]} />
//                 <meshBasicMaterial color={"red"} />
//             </mesh> */}
//         </>
//     )
// }
function Item(props) {
    const { scene } = useGLTF("/temple.glb");
    return <primitive object={scene} {...props}/>
  }

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

const Model = ({ projectId }) => {
    return (
        <div className='modelCard'>
            <h3 className='mb-3'>{projectId}</h3>
            <h3>Model</h3>
            <div id='model-main'>
            <Canvas 
            dpr={[1,2]} 
            size={[800,600]} 
            pixelRatio={window.devicePixelRatio} 
            shadows 
            camera={{fov: 75}} 
            style={{
                "position":"relative", 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                'height':'100%', 
                'width':'100%'
            }}
            >
            <color attach="background" args={["#101010"]} />
            <directionalLight intensity={0.5} position={[5, 5, 5]} />
            <OrbitControls enableZoom={true} enableRotate={true} />
                <Stage environment={null}>
                    <Item scale={0.01} />
                </Stage>
            </Canvas>
            </div>
            <div className="model-status mb-2 d-flex w-[31px] h-[31px] bg-zinc-300 rounded-full justify-content-between align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
<div className="w-[261.01px] h-[0px] border-4 border-zinc-300" style={{width: '16.313rem',
height: '0.3125rem', background: '#DFD9D9', marginTop:'0.5rem'}}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
<div className="w-[261.01px] h-[0px] border-4 border-zinc-300" style={{width: '16.313rem',
height: '0.3125rem', background: '#DFD9D9', marginTop:'0.5rem'}}></div>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
<circle cx="15.5" cy="15.5" r="15.5" fill="#D9D9D9"/>
</svg>
            </div>
            <div className='d-flex justify-content-between align-items-center' style={{paddingLeft: '20rem',
    paddingRight: '20rem'}}>
                <p>start</p>
                <p>intmediate</p>
                <p>final</p>
            </div>
        </div>
    );

};

export default Model;