import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';

function Selector(props) {
  return (
    <div style={{flex: "100%", display:"Flex", alignItems:"center", marginBottom:"4rem", justifyContent:"space-around"}}>
      <span style={{flex: "0 40%", fontSize:"2vw"}}>¿Cuántas minas va a tener el tablero?</span> 
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem"}} color='success' outline onClick={() => props.onClickMenos()}>-</Button>
      <span>{props.minas}</span>
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem", padding:0}} color='danger' outline onClick={() => props.onClickMas()}>+</Button>
      <Button style={{flex:"0 30%"}} color='warning'>Jugar</Button>
    </div>
  );
}


export default Selector;