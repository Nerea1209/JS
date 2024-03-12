// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label, InputGroup, InputGroupText, List } from "reactstrap";
import { PISOS } from '../datos/pisos.js';
import { PRECIOS } from '../datos/precios.js';
import Carrusel from './Carrusel.js';
import Progreso from './Progreso.js';
import { useState } from 'react';

export default function Formulario() {
    const [respuestas, setRespuestas] = useState([-1, -1, -1, 0, 0, 0, -1, 3, 0]);
    const [precio, setPrecio] = useState();
    const [progress, setProgress] = useState(3);

    let math = require('mathjs');


    const MATRIZ_PISOS = math.matrix(PISOS);
    const MATRIZ_PRECIOS = math.matrix(PRECIOS);

    // Fórmula de ecuación lineal
    const THETA = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(MATRIZ_PISOS), MATRIZ_PISOS)), math.transpose(MATRIZ_PISOS)), MATRIZ_PRECIOS)._data;

    // // Controlamos el submit
    const onClick = () => {
        if (!respuestas.find(v => v === -1)) {
            let resultado = math.multiply(THETA, respuestas).toLocaleString('es-ES', { minimumFractionDigits: 2 })
            setPrecio(resultado);
        } else {
            setPrecio(null)
        }
    }

    const handleChange = (event) => {

        let aux = JSON.parse(JSON.stringify(respuestas));
        let e = event.target;

        // Metemos las respuestas en nuestro hook
        switch (e.name) {
            case "metros":
                aux[0] = e.value !== "" ? e.value : -1;
                break;
            case "habitaciones":
                aux[1] = e.value !== "" ? e.value : -1;
                break;
            case "bathroom":
                aux[2] = e.value !== "" ? e.value : -1;
                break;
            case "vistas":
                aux[3] = e.checked ? 1 : 0;
                break;
            case "garaje":
                aux[4] = e.checked ? 1 : 0;
                break;
            case "trastero":
                aux[5] = e.checked ? 1 : 0;
                break;
            case "piscina":
                aux[8] = e.checked ? 1 : 0;
                break;
            case "estado":
                aux[7] = e.value;
                break;
            case "construccion":
                aux[6] = e.value !== "" ? e.value : -1;
                break;
            default:
                break;
        }
        setRespuestas(aux);
    }

    return (
        <div>
            <Carrusel />
            <Form onSubmit={(e) => e.preventDefault()}>

                <InputGroup>
                    <InputGroupText>
                        Metros cuadrados
                    </InputGroupText>
                    <Input type='number' id='metros' name='metros' onChange={handleChange} required min={0} placeholder='120' />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>
                        Nº de habitaciones
                    </InputGroupText>
                    <Input type='number' id='habitaciones' name='habitaciones' onChange={handleChange} required min={0} placeholder='3' />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>
                        Nº de baños
                    </InputGroupText>
                    <Input type='number' id='bathroom' name='bathroom' onChange={handleChange} required min={0} placeholder='1' />
                </InputGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='vistas' name='vistas' onChange={handleChange} />
                    <Label check for='vistas'>¿Tiene vistas al mar?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='garaje' name='garaje' onChange={handleChange} />
                    <Label check for='garaje'>¿Tiene garaje?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='trastero' name='trastero' onChange={handleChange} />
                    <Label check for='trastero'>¿Tiene trastero?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='piscina' name='piscina' onChange={handleChange} />
                    <Label check for='piscina'>¿Tiene piscina?</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="estado">
                        ¿En qué estado se encuentra?
                    </Label>
                    <div>
                        <Input
                            id="estado"
                            name="estado"
                            type="range"
                            min={1}
                            max={5}
                            defaultValue={3}
                            onInput={handleChange}
                        />
                        <List>
                            <li>1 (Mal estado)</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5 (Nueva construcción)</li>
                        </List>
                    </div>
                </FormGroup>

                <InputGroup>
                    <InputGroupText>
                        Año de construcción
                    </InputGroupText>
                    <Input type='number' id='construccion' name='construccion' onChange={handleChange} required min={0} placeholder='2003' />
                </InputGroup>

                <Progreso value={progress} />

                <FormGroup>
                    <Button color='primary' onClick={() => onClick()}>Calcular</Button>
                </FormGroup>

            </Form>

            {precio &&
                <h2 id='precioh2'>El precio calculado de tu vivienda es de {precio} €</h2>}

        </div>
    )
}
