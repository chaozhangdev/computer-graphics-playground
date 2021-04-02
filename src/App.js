// import React from 'react'
import React from "react";
import Object3D from "./components/Object3D/Object3D";
import Controller from "./components/Controller/Controller";

export default function App() {
  return (
    <div>
      <div className="screen">
        <Object3D />
        <Controller />
      </div>
    </div>
  );
}
