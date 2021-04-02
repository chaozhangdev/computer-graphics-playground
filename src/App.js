// import React from 'react'
import React from "react";
import Header from "./components/Header/Header";

import Object3D from "./components/Object3D/Object3D";
import Controller from "./components/Controller/Controller";

// import Screen from "./components/Screen/Screen";

export default function App() {
  return (
    <div>
      <Header />

      <div className="screen">
        <Object3D />
        <Controller />
      </div>

      {/* <Screen /> */}
    </div>
  );
}
