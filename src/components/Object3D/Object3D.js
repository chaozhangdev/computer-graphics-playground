import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./object3d-style.scss";
import init from '../Init';

export default function Object3D() {

  // first time -> init all data
  if (localStorage.getItem("firstTime") === null) {
    init();
  }

  const shape = localStorage.getItem("shape");
  const speed = parseFloat(localStorage.getItem("speed"));
  const size = [
    parseFloat(localStorage.getItem("length")),
    parseFloat(localStorage.getItem("width")),
    parseFloat(localStorage.getItem("height")),
  ];
  const ambientLight = localStorage.getItem("ambientLight");
  const spotLight = [
    parseFloat(localStorage.getItem("spotLightX")),
    parseFloat(localStorage.getItem("spotLightY")),
    parseFloat(localStorage.getItem("spotLightZ")),
  ];


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
        <meshStandardMaterial color={hovered ? "#fff" : "#ff9999"} />
      </mesh>
    );
  };

  return (
    <div className="object-wrapper">
      <Canvas>
        <ambientLight intensity={ambientLight} />
        <spotLight position={spotLight} angle={0.2} penumbra={1} />
        <pointLight position={[0, 0, 0]} />
        <Shape3D />
      </Canvas>
    </div>
  );
}
