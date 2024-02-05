import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Input,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import "./App.css"
import rojiza from "./Images/pielRojiza.png"
import blanca from "./Images/pielBlanca.png"
import beige from "./Images/pielBeige.png"
import beigeClaro from "./Images/pielBeigeClaro.png"
import marronClaro from "./Images/marronClaro.png"
import marron from "./Images/pielMarron.png"
import negra from "./Images/pielNegra.png"
import pelirrojo from "./Images/pelirrojo.png"
import rubioClaro from "./Images/rubioClaro.png"
import rubio from "./Images/rubio.png"
import castanoClaro from "./Images/castanoClaro.png"
import castano from "./Images/castano.png"
import castanoOscuro from "./Images/castanoOscuro.png"
import castanoMuyOscuro from "./Images/castanoMuyOscuro.png"
import negro from "./Images/negro.png"
import ojosNegros from "./Images/ojosNegros.png"
import ojosMarronesOscuros from "./Images/ojosMarronesOscuros.png"
import ojosMarrones from "./Images/ojosMarrones.png"
import ojosMarronesClaro from "./Images/ojosMarronClaro.png"
import ojosGrises from "./Images/ojosGrises.png"
import ojosVerdes from "./Images/ojosVerdes.png"
import ojosAzules from "./Images/ojosAzules.png"
import ojosGrisClaro from "./Images/ojosGrisClaro.png"
import ojosVerdeClaro from "./Images/ojosVerdeClaro.png"
import ojosAzulClaro from "./Images/ojosAzulClaro.png"
import muchas from "./Images/muchas.png"
import algunas from "./Images/algunas.png"
import pocas from "./Images/pocas.png"
import ninguna from "./Images/ninguna.png"


const VentanaModal = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} >
        <ModalHeader toggle={props.toggle}>Tipo de piel I</ModalHeader>
        <ModalBody>
          Su tipo de piel es muy sensible a la luz solar.
        </ModalBody>
        <ModalFooter>
          <span style={{ color: "red" }}>{props.error}</span><Button color="primary" onClick={() => props.add(props.nombre, props.telefono)}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

function Opciones(props) {
  const [open, setOpen] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [p3, setP3] = useState('');
  const [p4, setP4] = useState('');
  const [p5, setP5] = useState('');
  const [p6, setP6] = useState('');
  const [p7, setP7] = useState('');
  const [mostrar, setMostrar] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const handelChange = (event) => {
    const target = event.target;
    if (target.name === "p1") {
      setP1(target.value);
    }
    if (target.name === "p2") {
      setP2(target.value);
    }
    if (target.name === "p3") {
      setP3(target.value);
    }
    if (target.name === "p4") {
      setP4(target.value);
    }
    if (target.name === "p5") {
      setP5(target.value);
    }
    if (target.name === "p6") {
      setP6(target.value);
    }
    if (target.name === "p7") {
      setP7(target.value);
    }
  }

  const seleccionado = (p) => {
    if (p !== "") return "Seleccionado";
  }

  const onClick = () => {
    if (p1 !== "" && p2 !== "" && p3 !== "" && p4 !== "" && p5 !== "" && p6 !== "" && p7 !== "") {
      setMostrar(true)
    }
  }

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <Form>
          <AccordionItem>
            <AccordionHeader targetId="1">1. ¿Cuál es el color natural de su piel cuando no
              está bronceada? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p1)}</span></AccordionHeader>
            <AccordionBody accordionId="1">
              <section id='p1'>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={1}
                    id='o1'
                    onChange={handelChange}
                  />
                  <label for="o1">
                    <img src={rojiza} alt="Piel rojiza" />
                    Rojiza
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={2}
                    id='o2'
                    onChange={handelChange}
                  />
                  <label for="o2">
                    <img src={blanca} alt="Piel blanca" />
                    Blanca
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={3}
                    id='o3'
                    onChange={handelChange}
                  />
                  <label for="o3">
                    <img src={beigeClaro} alt="Piel beige claro" />
                    Beige claro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={4}
                    id='o4'
                    onChange={handelChange}
                  />
                  <label for="o4">
                    <img src={beige} alt="Piel beige" />
                    Beige
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={5}
                    id='o5'
                    onChange={handelChange}
                  />
                  <label for="o5">
                    <img src={marronClaro} alt="Piel marrón claro" />
                    Marrón claro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={6}
                    id='o6'
                    onChange={handelChange}
                  />
                  <label for="o6">
                    <img src={marron} alt="Piel marrón" />
                    Marrón
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={7}
                    id='o7'
                    onChange={handelChange}
                  />
                  <label for="o7">
                    <img src={negra} alt="Piel negra" />
                    Negra
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">2. ¿De qué color natural es su pelo? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p2)}</span></AccordionHeader>
            <AccordionBody accordionId="2">
              <section id='p2'>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={1}
                    id='o21'
                    onChange={handelChange}
                  />
                  <label for="o21">
                    <img src={pelirrojo} alt="Pelirrojo" />
                    Pelirrojo
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={2}
                    id='o22'
                    onChange={handelChange}
                  />
                  <label for="o22">
                    <img src={rubioClaro} alt="Rubio claro" />
                    Rubio claro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={3}
                    id='o23'
                    onChange={handelChange}
                  />
                  <label for="o23">
                    <img src={rubio} alt="Rubio" />
                    Rubio
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={4}
                    id='o24'
                    onChange={handelChange}
                  />
                  <label for="o24">
                    <img src={castanoClaro} alt="Castaño claro" />
                    Castaño claro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={5}
                    id='o25'
                    onChange={handelChange}
                  />
                  <label for="o25">
                    <img src={castano} alt="Castaño" />
                    Castaño
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={6}
                    id='o26'
                    onChange={handelChange}
                  />
                  <label for="o26">
                    <img src={castanoOscuro} alt="Castaño oscuro" />
                    Castaño oscuro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={7}
                    id='o27'
                    onChange={handelChange}
                  />
                  <label for="o27">
                    <img src={castanoMuyOscuro} alt="Castaño muy oscuro" />
                    Castaño muy oscuro
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p2'
                    value={8}
                    id='o28'
                    onChange={handelChange}
                  />
                  <label for="o28">
                    <img src={negro} alt="Negro" />
                    Negro
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">3. ¿De qué color tiene los ojos? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p3)}</span></AccordionHeader>
            <AccordionBody accordionId="3">
              <section id='p3'>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={1}
                    id='o31'
                    onChange={handelChange}
                  />
                  <label for="o31">
                    <img src={ojosAzulClaro} alt="Azules claros" />
                    Azules claros
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={2}
                    id='o32'
                    onChange={handelChange}
                  />
                  <label for="o32">
                    <img src={ojosVerdeClaro} alt="Verdes claros" />
                    Verdes claros
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={3}
                    id='o33'
                    onChange={handelChange}
                  />
                  <label for="o33">
                    <img src={ojosGrisClaro} alt="Grises claros" />
                    Grises claros
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={4}
                    id='o34'
                    onChange={handelChange}
                  />
                  <label for="o34">
                    <img src={ojosAzules} alt="Azules" />
                    Azules
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={5}
                    id='o35'
                    onChange={handelChange}
                  />
                  <label for="o35">
                    <img src={ojosVerdes} alt="Verdes" />
                    Verdes
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={6}
                    id='o36'
                    onChange={handelChange}
                  />
                  <label for="o36">
                    <img src={ojosGrises} alt="Grises" />
                    Grises
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={7}
                    id='o37'
                    onChange={handelChange}
                  />
                  <label for="o37">
                    <img src={ojosMarronesClaro} alt="Marrones claros" />
                    Marrones claros
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={8}
                    id='o38'
                    onChange={handelChange}
                  />
                  <label for="o38">
                    <img src={ojosMarrones} alt="Marrones" />
                    Marrones
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={9}
                    id='o39'
                    onChange={handelChange}
                  />
                  <label for="o39">
                    <img src={ojosMarronesOscuros} alt="Marrones oscuros" />
                    Marrones oscuros
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p3'
                    value={10}
                    id='o310'
                    onChange={handelChange}
                  />
                  <label for="o310">
                    <img src={ojosNegros} alt="Negros" />
                    Negros
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">4. ¿Cuántas pecas tiene de manera natural
              en el cuerpo cuando no está bronceado? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p4)}</span></AccordionHeader>
            <AccordionBody accordionId="4">
              <section id='p4'>
                <article>
                  <Input
                    type="radio"
                    name='p4'
                    value={1}
                    id='o41'
                    onChange={handelChange}
                  />
                  <label for="o41">
                    <img src={muchas} alt="Muchas" />
                    Muchas
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p4'
                    value={2}
                    id='o42'
                    onChange={handelChange}
                  />
                  <label for="o42">
                    <img src={algunas} alt="Algunas" />
                    Algunas
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p4'
                    value={3}
                    id='o43'
                    onChange={handelChange}
                  />
                  <label for="o43">
                    <img src={pocas} alt="Unas cuantas" />
                    Unas cuantas
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p4'
                    value={4}
                    id='o44'
                    onChange={handelChange}
                  />
                  <label for="o44">
                    <img src={pocas} alt="Ninguna" />
                    Ninguna
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">5. ¿Qué categoría describe mejor su herencia genética? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p5)}</span></AccordionHeader>
            <AccordionBody accordionId="5">
              <section id='p5'>
                <article>
                  <Input
                    type="radio"
                    name='p5'
                    value={1}
                    id='o51'
                    onChange={handelChange}
                  />
                  <label for="o51">
                    Raza blanca de piel <strong>muy blanca</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p5'
                    value={2}
                    id='o52'
                    onChange={handelChange}
                  />
                  <label for="o52">
                    Raza blanca de piel <strong>clara</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p5'
                    value={3}
                    id='o53'
                    onChange={handelChange}
                  />
                  <label for="o53">
                    Raza blanca de piel <strong>morena</strong> (Mediterráneo)
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p5'
                    value={4}
                    id='o54'
                    onChange={handelChange}
                  />
                  <label for="o54">
                    Oriente Medio, hindú, asiático, hispano-americano
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p5'
                    value={5}
                    id='o55'
                    onChange={handelChange}
                  />
                  <label for="o55">
                    Aborigen, africano, afroamericano
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">6. ¿Qué categoría describe mejor su potencial
              de QUEMADURA exponiéndose al sol una hora en verano? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p6)}</span></AccordionHeader>
            <AccordionBody accordionId="6">
              <section id='p6'>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={1}
                    id='o61'
                    onChange={handelChange}
                  />
                  <label for="o61">
                    <strong>Siempre</strong> se quema y no se broncea <strong>nunca</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={2}
                    id='o62'
                    onChange={handelChange}
                  />
                  <label for="o62">
                    <strong>Habitualmente</strong> se quema, pero puede broncearse <strong>ligeramente</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={3}
                    id='o63'
                    onChange={handelChange}
                  />
                  <label for="o63">
                    Se quema <strong>ocasionalmente</strong>, pero se broncea <strong>moderadamente</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={4}
                    id='o64'
                    onChange={handelChange}
                  />
                  <label for="o64">
                    <strong>Nunca</strong> se quema y se broncea con <strong>facilidad</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={5}
                    id='o65'
                    onChange={handelChange}
                  />
                  <label for="o65">
                    <strong>Raramente</strong> se quema y se broncea <strong>profundamente</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p6'
                    value={6}
                    id='o66'
                    onChange={handelChange}
                  />
                  <label for="o66">
                    <strong>Nunca</strong> se quema
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">7. ¿Qué categoría describe mejor su potencial
              de BRONCEADO? &nbsp; <span style={{ color: 'gray' }}>{seleccionado(p7)}</span></AccordionHeader>
            <AccordionBody accordionId="7">
              <section id='p7'>
                <article>
                  <Input
                    type="radio"
                    name='p7'
                    value={1}
                    id='o71'
                    onChange={handelChange}
                  />
                  <label for="o71">
                    <strong>Nunca</strong> se broncea
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p7'
                    value={2}
                    id='o72'
                    onChange={handelChange}
                  />
                  <label for="o72">
                    Se puede broncear <strong>ligeramente</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p7'
                    value={3}
                    id='o73'
                    onChange={handelChange}
                  />
                  <label for="o73">
                    Se puede broncear <strong>moderadamente</strong>
                  </label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p7'
                    value={4}
                    id='o74'
                    onChange={handelChange}
                  />
                  <label for="o74">
                    Se puede broncear <strong>profundamente</strong>
                  </label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <Button
            color="primary"
            id='boton'
            onClick={() => onClick()}
          >
            Obtener resultados
          </Button>
          <VentanaModal mostrar={mostrar} />
        </Form>
      </Accordion>
    </div >
  );
}

function App() {
  return (
    <div className="App">
      <h1>Descubre cuál es tu fototipo</h1>
      <Opciones />
    </div>
  );
}

export default App;
