import React from "react";
import Header from "./components/Header/Header";
import Blocks from "./components/Blocks/Blocks.js";

// https://github.com/pmndrs/react-three-fiber

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="blocksStyle">
        <Blocks />
      </div>
    </div>
  );
}

export default App;
