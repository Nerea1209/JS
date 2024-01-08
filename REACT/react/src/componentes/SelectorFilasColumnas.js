import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

function Selector(props) {
  return (
    <section style={{ width: '200px', marginTop:'1rem'}}>
      <article style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{margin:'.2rem 0'}}>
          <span style={{ fontSize: "1rem" }}>Filas:</span>
          <span>{props.filas}</span>
        </div>
        <div style={{margin:'.2rem 0'}}>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem" }} color='primary' outline onClick={() => props.onClickMenos("filas")}>-</Button>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem", padding: 0 }} color='secondary' outline onClick={() => props.onClickMas("filas")}>+</Button>
        </div>
      </article>
      <article style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{margin:'.2rem 0'}}>
          <span style={{ fontSize: "1rem" }}>Columnas:</span>
          <span>{props.filas}</span>
        </div>
        <div style={{margin:'.2rem 0'}}>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem" }} color='primary' outline onClick={() => props.onClickMenos("filas")}>-</Button>
          <Button style={{ width: "2rem", height: "2rem", lineHeight: "1rem", padding: 0 }} color='secondary' outline onClick={() => props.onClickMas("filas")}>+</Button>
        </div>
      </article>
    </section>
  );
}


export default Selector;