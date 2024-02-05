import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Input,
  Form,
} from 'reactstrap';
import "./App.css"
import rojiza from "./Images/pielRojiza.png"
import blanca from "./Images/pielBlanca.png"
function Opciones(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <Form>
          <AccordionItem>
            <AccordionHeader targetId="1">1. ¿Cuál es el color natural de su piel cuando no
              está bronceada? </AccordionHeader>
            <AccordionBody accordionId="1">
              <section id='p1'>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={0}
                    id='o1'
                  />
                  <label for="o1"><img src={rojiza} alt="Piel rojiza" />
                    Rojiza</label>
                </article>
                <article>
                  <Input
                    type="radio"
                    name='p1'
                    value={0}
                    id='o2'
                  />
                  <label for="o2"><img src={blanca} alt="Piel blanca" />
                    Blanca</label>
                </article>
              </section>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">2. ¿De qué color natural es su pelo? </AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">3. ¿De qué color tiene los ojos? </AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">4. ¿Cuántas pecas tiene de manera natural
              en el cuerpo cuando no está bronceado? </AccordionHeader>
            <AccordionBody accordionId="4">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">5. ¿Qué categoría describe mejor su herencia genética?</AccordionHeader>
            <AccordionBody accordionId="5">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">6. ¿Qué categoría describe mejor su potencial
              de QUEMADURA exponiéndose al sol una hora en verano?</AccordionHeader>
            <AccordionBody accordionId="6">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">7. ¿Qué categoría describe mejor su potencial
              de BRONCEADO?</AccordionHeader>
            <AccordionBody accordionId="7">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Form>
      </Accordion>
    </div>
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
