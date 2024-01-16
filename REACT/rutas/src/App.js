import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import Menu from './Componentes/Nav';

function App() {
  return (
    <div className="App">
      <h1>ELEMENTO APP</h1>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
