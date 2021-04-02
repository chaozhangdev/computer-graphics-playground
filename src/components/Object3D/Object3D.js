import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './object3d-style.scss'

export default function Object3D() {

  const init = () => {
    localStorage.setItem("speed", 0.02);
    localStorage.setItem("shape", "box");
  };

  // first time -> init all data
  if (localStorage.getItem("firstTime") === null) {
    init();
  }

  const shape = localStorage.getItem("shape");
  const speed = parseFloat(localStorage.getItem("speed"));
  const size = [1, 1, 1];

  const Shape3D = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x += speed;
      mesh.current.rotation.y += speed;
    });
    return (
      <mesh
        ref={mesh}
        scale={size}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        {shape === "box" ? <boxGeometry /> : <sphereGeometry />}

        <meshStandardMaterial color={hovered ? "hotpink" : "white"} />
      </mesh>
    );
  };

  return (
    <div className='object-wrapper'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Shape3D />
      </Canvas>
    </div>
  );
}
