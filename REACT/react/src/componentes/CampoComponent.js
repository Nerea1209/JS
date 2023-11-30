import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Campo(props) {
  return (
    <div>
      <Container style={props.style}>
        {props.matriz.map((v, i, array) => <Row>{v.map((k, j, fila) => <Col style={{ padding: ".1rem" }}><Button style={{ width: "100%", height: "auto" }}>{k}</Button></Col>)}</Row>)}
      </Container>
    </div>
  );
}


export default Campo;