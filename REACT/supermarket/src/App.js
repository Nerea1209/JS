import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function Mapa(props) {
  return (
    <Container>
      <Row key={crypto.randomUUID()}>
        {props.poblacion.map((v, i) => {
          let aux = props.supermercados.find(l => l.coordenada[0] + (l.coordenada[0] % 9) === i);
          let color = "success";
          aux ? color = "primary" : color = "success";
          if (i % 9 === 0 && i !== 0) {
            return (<>
              <Col key={"a" + i} xs="3" style={{ visibility: "hidden" }}></Col>
              <Col key={i} xs="1"><Button color={color} onClick={(e) => props.onClick(e, i)}>{v}</Button></Col>
            </>)
          } else {
            return (
              <Col key={i} xs="1"><Button color={color} onClick={(e) => props.onClick(e, i)}>{v}</Button></Col>
            )
          }
        })}
      </Row>
    </Container>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [0, 5, 4, 2, 9, 8, 0, 8, 8,
        1, 7, 21, 23, 44, 5, 3, 4, 0,
        2, 6, 32, 22, 33, 8, 4, 2, 8,
        1, 2, 43, 4, 56, 65, 34, 11, 8,
        2, 22, 32, 3, 42, 62, 43, 21, 0,
        2, 2, 23, 34, 64, 24, 42, 15, 7,
        0, 2, 36, 43, 61, 26, 64, 12, 0,
        1, 2, 15, 43, 34, 2, 12, 2, 3,
        1, 0, 12, 3, 0, 0, 21, 2, 2],
      supermercados: []
    };
  }
  onClick(boton, i) {
    let color = boton.target.className.split("-")[1];
    console.log(color)
    if (color === "success") {
      boton.target.classList.remove("btn-success");
      boton.target.classList.add("btn-primary");
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      aux.push({ "nombre": "Supermercado " + (aux.length + 1), "coordenada": [Math.floor(i / 9), Math.floor(i % 9)] })
      this.setState({ supermercados: aux })
    } else {
      boton.target.classList.remove("btn-primary");
      boton.target.classList.add("btn-success");
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      console.log(aux.filter((v) => v.coordenada != [Math.floor(i / 9), Math.floor(i % 9)]))
      this.setState({ supermercados: aux.filter((v) => v.coordenada != [Math.floor(i / 9), Math.floor(i % 9)]) })
    }
    console.log(this.state.supermercados.map(v => <p><strong>{v.nombre} ({v.coordenada[0] + "," + v.coordenada[1]}): </strong> x personas.</p>))
  }
  encontrarSupermercados() {
    // Calcular distancia (D)
    // this.state.poblacion.find((v, i) => i)
    // Filtro supermercados a esa distancia (D) -> N
    // Divido poblacion entre supermercados -> P
    // A cada supermercado del filtro le sumo la P
  }
  render() {
    return (
      <div className="App" >
        <h1>Supermarkets</h1>
        <Mapa poblacion={this.state.poblacion} supermercados={this.state.supermercados} onClick={(boton, i) => this.onClick(boton, i)} />
        <br />
        <p><strong>Población total: </strong> {this.state.poblacion.reduce((suma, v) => suma + (v * 1000), 0)} personas.</p>

        {this.state.supermercados.length !== 0 && <><h2>Supermercados</h2><ul>
          {this.state.supermercados.map((v, i) => <li key={i}><strong>{v.nombre} ({(v.coordenada[0] + 1) + "," + (v.coordenada[1] + 1)}): </strong> x personas.</li>)}
        </ul></>}

      </div>
    );
  }
}

export default App;
