// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label, InputGroup, InputGroupText, List, Modal, ModalHeader, ModalBody } from "reactstrap";
import { PISOS } from '../datos/pisos.js';
import { PRECIOS } from '../datos/precios.js';
import Carrusel from './Carrusel.js';
import Progreso from './Progreso.js';
import { useState } from 'react';

export default function Formulario() {
    const [respuestas, setRespuestas] = useState([-1, -1, -1, 0, 0, 0, -1, 3, 0]);
    const [precio, setPrecio] = useState();
    const [progress, setProgress] = useState(0);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState("");

    const toggle = () => setModal(!modal);

    let math = require('mathjs');

    const MATRIZ_PISOS = math.matrix(PISOS);
    const MATRIZ_PRECIOS = math.matrix(PRECIOS);

    const THETA = math.multiply(math.multiply(math.inv(math.multiply(math.transpose(MATRIZ_PISOS), MATRIZ_PISOS)), math.transpose(MATRIZ_PISOS)), MATRIZ_PRECIOS)._data;

    const onClick = () => {
        if (!respuestas.find(v => v === -1)) {
            let resultado = math.multiply(THETA, respuestas).toLocaleString('es-ES', { minimumFractionDigits: 2 })
            setPrecio(resultado);
            toggle();
            setError("")
        } else {
            setPrecio(null)
            setError("Rellene todos los campos del formulario")
        }
    }

    const cerrar = () => {
        setPrecio()
        setRespuestas([-1, -1, -1, 0, 0, 0, -1, 3, 0])
        setProgress(0)
        toggle();
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
        setProgress(aux.filter(v => v !== -1).length - 5)
    }

    return (
        <div>
            <Carrusel />
            <Form onSubmit={(e) => e.preventDefault()}>

                <InputGroup>
                    <InputGroupText>
                        Metros cuadrados
                    </InputGroupText>
                    <Input type='number' id='metros' name='metros' value={respuestas[0] === -1 ? "" : respuestas[0]} onChange={handleChange} required min={0} placeholder='120' />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>
                        Nº de habitaciones
                    </InputGroupText>
                    <Input type='number' id='habitaciones' name='habitaciones' value={respuestas[1] === -1 ? "" : respuestas[1]} onChange={handleChange} required min={0} placeholder='3' />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>
                        Nº de baños
                    </InputGroupText>
                    <Input type='number' id='bathroom' name='bathroom' value={respuestas[2] === -1 ? "" : respuestas[2]} onChange={handleChange} required min={0} placeholder='1' />
                </InputGroup>

                <InputGroup>
                    <InputGroupText>
                        Año de construcción
                    </InputGroupText>
                    <Input type='number' id='construccion' name='construccion' value={respuestas[6] === -1 ? "" : respuestas[6]} onChange={handleChange} required min={0} placeholder='2003' />
                </InputGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='vistas' name='vistas' onChange={handleChange} />
                    <Label check for='vistas'>¿Tiene vistas al mar?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='garaje' name='garaje' checked={respuestas[4] === 0 ? false : true} onChange={handleChange} />
                    <Label check for='garaje'>¿Tiene garaje?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='trastero' name='trastero' checked={respuestas[5] === 0 ? false : true} onChange={handleChange} />
                    <Label check for='trastero'>¿Tiene trastero?</Label>
                </FormGroup>

                <FormGroup switch>
                    <Input type="switch" role="switch" id='piscina' name='piscina' checked={respuestas[8] === 0 ? false : true} onChange={handleChange} />
                    <Label check for='piscina'>¿Tiene piscina?</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="estado">
                        ¿En qué estado se encuentra? <br></br> (Mal estado) 1 - 5 (Nueva construcción)
                    </Label>
                    <div>
                        <Input
                            id="estado"
                            name="estado"
                            type="range"
                            min={1}
                            max={5}
                            value={respuestas[7]}
                            onInput={handleChange}
                        />
                        <List>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </List>
                    </div>
                </FormGroup>

                <Progreso value={progress} />
                <span id='error'>{error}</span>
                <Button color='primary' onClick={() => onClick()}>Calcular</Button>
                <Modal isOpen={modal} toggle={toggle} centered>
                    <ModalHeader toggle={cerrar}>Estimación del Valor de la Propiedad: Resultados</ModalHeader>
                    <ModalBody>
                        Nuestra estimación sitúa el valor de tu propiedad en... <br></br> <strong>{precio} €</strong>.<br></br> ¡Es momento de tomar decisiones informadas!
                        <img src='https://picsum.photos/id/123/1200/400' alt='Resultado' />
                    </ModalBody>
                </Modal>
            </Form>
        </div>
    )
}
