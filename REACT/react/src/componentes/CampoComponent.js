import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Campo(props) {
  return (
    <div>
      <Container>
        <Row xs={props.matriz.length} style={{ width: "20rem" }}>
          {props.matriz.map(v => v.map(k => <Col style={{padding: ".1rem"}}><Button style={{width:"100%", height: "auto"}}>{k}</Button></Col>))}
        </Row>
      </Container>
    </div>
  );
}


export default Campo;