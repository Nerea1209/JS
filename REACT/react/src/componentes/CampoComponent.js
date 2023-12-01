import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Campo(props) {

  return (
    <div>
      <Container>
        {props.matriz.map((v, i) => <Row key={i}> { v.map((k, j) => {
          let elemento = <Col key={i +""+ j} style={{ padding: ".1rem" }}><Button style={{ width: "100%", height: "auto" }}>{k}</Button></Col>;

          const caminoElemento = props.camino.find(u => u.key === (i + "" + j));
          if (caminoElemento) {
            elemento = caminoElemento;
          }

          if (i === props.posicion[0] && j === props.posicion[1]) {
            elemento =  <Col key={i +""+ j} style={{ padding: ".1rem" }}><Button style={{ width: "100%", height: "auto" }} color={props.colorPosicion} outline>{props.textoPosicion}</Button></Col>
          }

          return elemento;
        }) }</Row>)}
      </Container>
    </div>
  );
}


export default Campo;