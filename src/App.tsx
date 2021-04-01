import React from 'react';
import Header from './components/Header/Header'
import Demo from './components/Demo.js'

// https://github.com/pmndrs/react-three-fiber 

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='blocks'>
      <Demo />
      </div>
    </div>
  );
}

export default App;
