import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function Mapa(props) {
  return (
    <Container>
      {props.poblacion.map((v, i) => {
        return (
          <Row key={crypto.randomUUID()}>
            {v.map((l, j) => {
              let aux = props.supermercados.find(l => l.coordenada[0] === i && l.coordenada[1] === j);
              let color = "success";
              aux ? color = "primary" : color = "success";
              return (<Col key={crypto.randomUUID()} xs="1"><Button color={color} onClick={(e) => props.onClick(e, i, j)}>{l}</Button></Col>)
            })}
          </Row>
        )
      })}
    </Container>
  );
}

function Poblacion(props) {
  let suma = 0;
  props.poblacion.map(v => v.map(l => suma += l * 1000))
  return (<><p><strong>Población total: </strong> {suma} personas.</p> </>)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [[0, 5, 4, 2, 9, 8, 0, 8, 8],
      [1, 7, 21, 23, 44, 5, 3, 4, 0],
      [2, 6, 32, 22, 33, 8, 4, 2, 8],
      [1, 2, 43, 4, 56, 65, 34, 11, 8],
      [2, 22, 32, 3, 42, 62, 43, 21, 0],
      [2, 2, 23, 34, 64, 24, 42, 15, 7],
      [0, 2, 36, 43, 61, 26, 64, 12, 0],
      [1, 2, 15, 43, 34, 2, 12, 2, 3],
      [1, 0, 12, 3, 0, 0, 21, 2, 2]],
      supermercados: []
    };
  }
  onClick(boton, i, j) {
    let color = boton.target.className.split("-")[1];
    console.log(color)
    if (color === "success") {
      boton.target.classList.remove("btn-success");
      boton.target.classList.add("btn-primary");
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      aux.push({ "nombre": "Supermercado " + (aux.length + 1), "coordenada": [i, j], "personas": this.encontrarSupermercados(i, j) })
      this.setState({ supermercados: aux })
    } else {
      boton.target.classList.remove("btn-primary");
      boton.target.classList.add("btn-success");
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      console.log(aux.filter((v) => v.coordenada[0] !== i && v.coordenada[1] !== j))
      this.setState({ supermercados: aux.filter((v) => v.coordenada[0] !== i && v.coordenada[1] !== j) })
    }
    // console.log(this.state.supermercados.map(v => <p><strong>{v.nombre} ({v.coordenada[0] + "," + v.coordenada[1]}): </strong> x personas.</p>))
  }
  encontrarSupermercados(i, j) {
    let aux = JSON.parse(JSON.stringify(this.state.poblacion));
    // Calcular distancia (D)
    // i++;
    // j++
    let d = 1;
    let personas = aux[i][j] * 1000;
    while (i + d < aux.length || j + d < aux.length || j - d >= 0 || i - d >= 0) {
      // console.log(d)
      for (let l = i - d; l <= i + d; l++) {
        for (let k = j - d; k <= j + d; k++) {
          console.log(personas)
          console.log("l" + l + "-k" + k)
          if (i - d >= 0 && l == i - d) {
            if (k < aux.length && k >= 0)
              personas += aux[l][k] * 1000;
          }
          console.log(personas)
          if (j - d >= 0 && k == j - d && l != i - d && l != i + d) {
            if (l < aux.length && l >= 0)
              personas += aux[l][k] * 1000;
          }
          console.log(personas)
          if (i + d < aux.length && l == i + d) {
            if (k < aux.length && k >= 0)
              personas += aux[l][k] * 1000;
          }
          console.log(personas)
          if (j + d < aux.length && k == j + d && l != i + d && l != i - d) {
            if (l < aux.length && l >= 0)
              personas += aux[l][k] * 1000;
          }
          console.log(personas)
        }
      }
      // if (j - d >= 0) {
      //   // Izquierda
      //   console.log("izq" + aux[i][j - d] * 1000)

      // }
      // if (j + d < aux.length) {
      //   console.log("der" + aux[i][j + d] * 1000)
      //   // Derecha
      //   personas += aux[i][j + d] * 1000;
      // }
      // if (i - d >= 0) {
      //   console.log("arr" + aux[i - d][j] * 1000)
      //   // Arriba
      //   personas += aux[i - d][j] * 1000;
      // }
      // if (i + d < aux.length) {
      //   console.log("aba" + aux[i + d][j] * 1000)
      //   // Abajo
      //   personas += aux[i + d][j] * 1000;
      // }
      // if (i - d >= 0 && j - d >= 0) {
      //   console.log("arr-izq" + aux[i - d][j - d] * 1000)
      //   // Diagonal arriba-izquierda
      //   personas += aux[i - d][j - d] * 1000;
      // }
      // if (i - d >= 0 && j + d < aux.length) {
      //   console.log("arr-der" + aux[i - d][j + d] * 1000)
      //   // Diagonal arriba-derecha
      //   personas += aux[i - d][j + d] * 1000;
      // }
      // if (i + d < aux.length && j - d >= 0) {
      //   console.log("aba-izq" + aux[i + d][j - d] * 1000)
      //   // Diagonal abajo-izquierda
      //   personas += aux[i + d][j - d] * 1000;
      // }

      // if (i + d < aux.length && j + d < aux.length) {
      //   console.log("aba-der" + aux[i + d][j + d] * 1000)
      //   // Diagonal abajo-derecha
      //   personas += aux[i + d][j + d] * 1000;
      // }
      d++;
    }
    return personas;
    // this.state.poblacion.find((v, i) => i)
    // Filtro supermercados a esa distancia (D) -> N
    // Divido poblacion entre supermercados -> P
    // A cada supermercado del filtro le sumo la P
  }
  render() {
    return (
      <div className="App" >
        <h1>Supermarkets</h1>
        <Mapa poblacion={this.state.poblacion} supermercados={this.state.supermercados} onClick={(boton, i, j) => this.onClick(boton, i, j)} />
        <br />
        <Poblacion poblacion={this.state.poblacion} />

        {this.state.supermercados.length !== 0 && <><h2>Supermercados</h2><ul>
          {this.state.supermercados.map((v, i) => <li key={i}><strong>{v.nombre} ({(v.coordenada[0] + 1) + "," + (v.coordenada[1] + 1)}): </strong> {v.personas} personas.</li>)}
        </ul></>}
      </div>
    );
  }
}

export default App;
