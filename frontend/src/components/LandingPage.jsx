import NavBar from './NavBar';
import { Canvas } from "@react-three/fiber"
import { useGLTF, Stage, PresentationControls } from "@react-three/drei"
import { styled } from '@mui/material';

function Model(props) {
    const { scene } = useGLTF("/tiny_isometric_room.glb")
    return <primitive object={scene} position={[0, -160, 0]} {...props} />
}


const LandingPage = () => {
    const polarMid = (-0.1 + Math.PI / 4) / 2; // Vertical midpoint
    const azimuthMid = (-Math.PI / 2 + 0.2) / 2; // Horizontal midpoint

    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <NavBar />
            <Canvas dpr={[1, 2]} shadows={false} camera={{ fov: 45, position: [0, 1, 1250], near: 0.1, far: 2000}} style={{ 
                "position": "absolute", 
                top: 0,
                left: 0,
                width: "100%",
                height: "100%" 
                }}
            >
                <color attach="background" args={['#101010']} />
                {/* Add light configurations if needed */}
                {/* <ambientLight intensity={0.5}  /> */}
                {/* <pointLight position={[10, 10, 10]} castShadow={false} /> */}
                
                <PresentationControls speed={1.0} global zoom={1} polar={[-0.1, Math.PI / 4]} azimuth={[-Math.PI / 2, 0.2]}>
                    {/* <Stage environment={null} scale={0.1}> */}
                        <Model castShadow={false} receiveShadow={false} />
                    {/* </Stage> */}
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default LandingPage;