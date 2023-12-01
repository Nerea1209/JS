import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Campo(props) {

  return (
    <div>
      <Container style={props.style}>
        {props.matriz.map((v, i) => <Row key={i}>{v.map((k, j) => {
          if (i === props.posicion[0] && j === props.posicion[1]) {
            return <Col key={i + j} style={{ padding: ".1rem" }}><Button style={{ width: "100%", height: "auto" }} color={props.colorPosicion} outline>{props.textoPosicion}</Button></Col>
          } else {
            return <Col key={i + j} style={{ padding: ".1rem" }}><Button style={{ width: "100%", height: "auto" }}>{k}</Button></Col>
          }
        })}</Row>)}


      </Container>
    </div>
  );
}


export default Campo;