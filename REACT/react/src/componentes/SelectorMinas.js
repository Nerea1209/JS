import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function SelectorMinas(props) {
  return (
    <div>
      <article style={{ display: 'flex', justifyContent: 'space-between', width:'200px'}}>
        <div style={{margin:'.2rem 0'}}>
          <span style={{ fontSize: "1rem" }}>Minas: </span>
          <span>{props.minas}</span>
        </div>
        <div style={{margin:'.2rem 0'}}>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem" }} color='success' outline onClick={() => props.onClickMenos()}>-</Button>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem", padding: 0 }} color='danger' outline onClick={() => props.onClickMas()}>+</Button>
        </div>
      </article>
      <p style={{textAlign:'right'}}><Button color='warning' onClick={() => props.onClickJugar()}>Jugar</Button></p>
    </div>
  );
}


export default SelectorMinas;