import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

function Selector(props) {
  return (
    <div style={{flex: "100%", display:"Flex", alignItems:"center", marginBottom:"4rem", justifyContent:"space-around"}}>
      <p><span style={{flex: "0 40%", fontSize:"1rem"}}>Filas:</span> 
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem"}} color='primary' outline onClick={() => props.onClickMenos("filas")}>-</Button>
      <span>{props.filas}</span>
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem", padding:0}} color='secondary' outline onClick={() => props.onClickMas("filas")}>+</Button>
      </p>
      <p><span style={{flex: "0 40%", fontSize:"1rem"}}>Columnas:</span> 
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem"}} color='primary' outline onClick={() => props.onClickMenos("columnas")}>-</Button>
      <span>{props.columnas}</span>
      <Button style={{width:"2rem", height:"2rem", lineHeight:"1rem", padding:0}} color='secondary' outline onClick={() => props.onClickMas("columnas")}>+</Button>
      </p>
    </div>
  );
}


export default Selector;