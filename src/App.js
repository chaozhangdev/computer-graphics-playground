// import React from 'react'
import React from 'react'
import Header from "./components/Header/Header";
import Box from "./components/Box/Box";
import Controller from './components/Controller/Controller'

export default function App() {
  return (
    <div>
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="screen">
        <div className="box-wrapper">
          <Box />
        </div>
        <div className="controller-wrapper">
          <Controller />
        </div>
      </div>
    </div>
  );
}
