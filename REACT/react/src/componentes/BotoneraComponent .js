import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Botonera(props) {
  return (
    <div className="App">
      <Container>
        <Row xs="3" style={{ width: "8rem" }}>
          <Col></Col>
          <Col><Button style={{ fontSize: "1.3rem" }} outline onClick={props.onClick}>⇡</Button></Col>
          <Col></Col>
          <Col><Button style={{ fontSize: "1.3rem" }} outline onClick={props.onClick}>⇠</Button></Col>
          <Col></Col>
          <Col><Button style={{ fontSize: "1.3rem" }} outline onClick={props.onClick}>⇢</Button></Col>
          <Col></Col>
          <Col><Button style={{ fontSize: "1.3rem" }} outline onClick={props.onClick}>⇣</Button></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}


export default Botonera;