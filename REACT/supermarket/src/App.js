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
    // console.log(color)
    if (color === "success") {
      // boton.target.classList.remove("btn-success");
      // boton.target.classList.add("btn-primary");
      let poblacion = JSON.parse(JSON.stringify(this.state.poblacion));
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      aux.push({ "nombre": "Supermercado " + (aux.length + 1), "coordenada": [i, j], "personas": poblacion[i][j] })
      this.setState({ supermercados: aux })
      this.encontrarSupermercados(aux)
    } else {
      boton.target.classList.remove("btn-primary");
      boton.target.classList.add("btn-success");
      let aux = JSON.parse(JSON.stringify(this.state.supermercados));
      // console.log(i + "," + j)
      this.setState({ supermercados: aux.filter((v) => v.coordenada[0] !== i || v.coordenada[1] !== j) })
      // console.log(this.state.supermercados)
    }
    // console.log(this.state.supermercados.map(v => <p><strong>{v.nombre} ({v.coordenada[0] + "," + v.coordenada[1]}): </strong> x personas.</p>))
  }
  encontrarSupermercados(mercados) {
    let aux = JSON.parse(JSON.stringify(this.state.poblacion));
    // let mercados = JSON.parse(JSON.stringify(this.state.supermercados));
    // console.log(mercados)
    // Reseteo las personas de todos los supermercados
    mercados.map(v => {
      v.personas = 0
      return v
    })

    aux.forEach((v, i) => v.forEach((m, j) => {
      // Calcular distancia (D)
      let encontrado = false
      let d = 0;


      while (!encontrado && (i + d < aux.length || j + d < aux.length || j - d >= 0 || i - d >= 0)) {
        let cercanos = [];
        for (let l = i - d; l <= i + d; l++) {
          for (let k = j - d; k <= j + d; k++) {
            if (l >= 0 && k >= 0 && l < aux.length && k < aux[i].length) {
              // console.log(mercados.find(c => c.coordenada[0] === l && c.coordenada[1] === k) && !cercanos.find(c => c.coordenada[0] === l && c.coordenada[1] === k))
              if (mercados.find(c => c.coordenada[0] === l && c.coordenada[1] === k)) {
                // console.log("soy un supermercado")
                cercanos.push(mercados.find(c => c.coordenada[0] === l && c.coordenada[1] === k));
                encontrado = true;
              }
            }
          }
        }

        // Si hay cercanos, repartimos la población
        if (cercanos.length > 0) {
          cercanos.forEach(v => {
            // console.log(v)

            v.personas += Math.ceil(aux[v.coordenada[0]][v.coordenada[1]] * 1000 / cercanos.length)
            // console.log(v.nombre + ": " + v.personas)
            mercados.find(l => l.coordenada[0] === v.coordenada[0] && l.coordenada[1] === v.coordenada[1]).personas = v.personas;
          })
          this.setState({ supermercados: mercados })
        }
        d++;
      }
    }))
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
