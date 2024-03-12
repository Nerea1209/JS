import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { PISOS } from './datos/pisos.js';
import { PRECIOS } from './datos/precios.js';
import Carrusel from './Componentes/Carrusel.js';
import Progreso from './Componentes/Progreso.js';
import Formulario from './Componentes/Formulario.js';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <h2>Descubre cuánto vale tu hogar</h2>
      <Formulario />
    </div>
  )
}
