/* eslint-disable react-hooks/rules-of-hooks */
// import React from "react";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import THREE from "three";
import "./screen-style.scss";

// controller
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Screen() {
  // data
  const [shape, setShape] = useState("box");

  const Shape3D = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<THREE.Mesh>(null!);
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x += 0.02;
      mesh.current.rotation.y += 0.02;
    });
    return (
      <mesh
        ref={mesh}
        position={[0, 0, 0]}
        // scale={active ? [2, 2, 2] : [1, 1, 1]}
        scale = {[ 1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        {shape === "box" ? (
          <boxBufferGeometry args={[1, 1, 1]} />
        ) : (
          <sphereGeometry args={[1, 16, 16]} />
        )}
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };

  return (
    <div className="screen-container">
      <div className="left-section">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Shape3D />
        </Canvas>
      </div>
      <div className="right-section">
        <div>
          <Box textAlign="center" m={2}>
            <Typography variant="h3">Responsive h3</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box m={2}>
              <Button variant="contained" onClick={() => setShape("box")}>
                Box Geometry
              </Button>
            </Box>
            <Box m={2}>
              <Button variant="contained" onClick={() => setShape("sphere")}>
                Sphere Geometry
              </Button>
            </Box>

            <Box m={2}>
              <Button variant="contained" onClick={() => setShape("sphere")}>
                +
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
