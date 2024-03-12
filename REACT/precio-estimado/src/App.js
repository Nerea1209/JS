import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { PISOS } from './datos/pisos.js';
import { PRECIOS } from './datos/precios.js';
import Carrusel from './Componentes/carrusel.js';
import { useState } from 'react';

export default function App() {

  // Vamos a crear los hooks
  const [respuestas, setRespuestas] = useState(Array(9).fill(0));
  const [precio, setPrecio] = useState();
  const [terminado, setTerminado] = useState(false);

  // // Variables para las constantes
  // let anio = new Date();
  // let math = require('mathjs');

  // // // Constantes
  // const ANIO_ACTUAL = anio.getFullYear(); // Cogemos el año actual (para el máx del año de construccion)
  // // // Metemos los datos en matrices
  // const MATRIZ_PISOS = math.matrix(PISOS);
  // const MATRIZ_PRECIOS = math.matrix(PRECIOS);

  // // // Vamos a calcular theta con la fórmula de ecuación lineal
  // // // donde X es la matriz de pisos e y la matriz de precios
  // const THETA = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(MATRIZ_PISOS), MATRIZ_PISOS)), math.transpose(MATRIZ_PISOS)), MATRIZ_PRECIOS)
  // let theta_calc = THETA._data; // Ya tenemos theta, solo tenemos que multiplicarlo por las variables

  // // Controlamos el submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // let resultado = math.multiply(theta_calc, respuestas);
    // let resultadoBonito = math.round(resultado, 2)
    // setPrecio(resultadoBonito);

    // Lo marcamos como terminado
    setTerminado(true)

  }

  const handleChange = (event) => {

    let respuestasCopia = JSON.parse(JSON.stringify(respuestas));
    let e = event.target;

    // Metemos las respuestas en nuestro hook
    switch (e.name) {
      case "metros":
        respuestasCopia[0] = e.value;
        break;
      case "habitaciones":
        respuestasCopia[1] = e.value;
        break;
      case "banios":
        respuestasCopia[2] = e.value;
        break;
      case "vistas":
        respuestasCopia[3] = e.checked ? 1 : 0;
        break;
      case "garaje":
        respuestasCopia[4] = e.checked ? 1 : 0;
        break;
      case "trastero":
        respuestasCopia[5] = e.checked ? 1 : 0;
        break;
      case "anio":
        respuestasCopia[6] = e.value;
        break;
      case "estado":
        respuestasCopia[7] = e.value ? 1 : 0;
        break;
      case "piscina":
        respuestasCopia[8] = e.checked ? 1 : 0;
        break;
    }

    setRespuestas(respuestasCopia);
  }

  return (
    <div>
      <Carrusel />
      <Form id="formulario" onSubmit={handleSubmit}>

        <FormGroup>
          <Input type='number' id='metros' name='metros' onChange={handleChange} required placeholder='Metros cuadrados' min={0} />
        </FormGroup>

        <FormGroup>
          <Input type='number' id='habitaciones' name='habitaciones' onChange={handleChange} required placeholder='Nº de habitaciones' min={0} />
        </FormGroup>

        <FormGroup>
          <Input type='number' id='banios' name='banios' onChange={handleChange} required placeholder='Nº de baños' min={0} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='vistas'>¿Tiene vistas al mar?</Label>&nbsp;&nbsp;
          <Input type='checkbox' id='vistas' name='vistas' onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='garaje'>¿Tiene garaje?</Label>&nbsp;&nbsp;
          <Input type='checkbox' id='garaje' name='garaje' onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='trastero'>¿Tiene trastero?</Label>&nbsp;&nbsp;
          <Input type='checkbox' id='trastero' name='trastero' onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='estado'>Del 1 (desastroso) al 5 (nuevo), ¿en qué estado se encuentra?</Label>
          <Input type='number' id='estado' name='estado' onChange={handleChange} required placeholder='Estado (1-5)' min={1} max={5} />
        </FormGroup>

        <FormGroup>
          <Input type='number' id='fecha' name='fecha' onChange={handleChange} required placeholder='Año de construcción' min={0} /*max={ANIO_ACTUAL}*/ />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='piscina'>¿Tiene piscina?</Label>&nbsp;&nbsp;
          <Input type='checkbox' id='piscina' onChange={handleChange} name='piscina' />
        </FormGroup>

        <FormGroup id='fg-btnEnviar'>
          <Button color='primary'>Enviar datos</Button>
        </FormGroup>

      </Form>

      {terminado &&
        <h2 id='precioh2'>El precio calculado de tu vivienda es de {precio} €</h2>}

    </div>
  )
}
