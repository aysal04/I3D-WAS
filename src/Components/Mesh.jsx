import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei"


function Item(props) {
  const { scene } = useGLTF("/meshed-poisson.glb");
  return <primitive object={scene} {...props}/>
}

function Table() {
  return(
    <Canvas dpr={[1,2]} shadows camera={{fov: 75}} style={{"position":"absolute"}}>
      <color attach="background" args={["#101010"]} />
      <directionalLight intensity={0.5} position={[5, 5, 5]} />
      <OrbitControls enableZoom={true} enableRotate={true} />
      <Stage environment={null}>
        <Item scale={0.01} />
      </Stage>
    </Canvas>

  );
}

export default Table;