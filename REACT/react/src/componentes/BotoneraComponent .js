import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Botonera(props) {
  return (
    <div className="App">
      <Container style={{marginTop:'1rem'}}>
        <Row xs="3" style={{ width: "8rem", margin:'0 auto'}}>
          <Col style={{padding:'0'}}></Col>
          <Col style={{padding:'0'}}><Button style={{ fontSize: "1.3rem" }} outline onClick={() => props.onClick("Arriba")}>⇡</Button></Col>
          <Col style={{padding:'0'}}></Col>
          <Col style={{padding:'0'}}><Button style={{ fontSize: "1.3rem" }} outline onClick={() => props.onClick("Izquierda")}>⇠</Button></Col>
          <Col style={{padding:'0'}}></Col>
          <Col style={{padding:'0'}}><Button style={{ fontSize: "1.3rem" }} outline onClick={() => props.onClick("Derecha")}>⇢</Button></Col>
          <Col style={{padding:'0'}}></Col>
          <Col style={{padding:'0'}}><Button style={{ fontSize: "1.3rem" }} outline onClick={() => props.onClick("Abajo")}>⇣</Button></Col>
          <Col style={{padding:'0'}}></Col>
        </Row>
      </Container>
    </div>
  );
}


export default Botonera;