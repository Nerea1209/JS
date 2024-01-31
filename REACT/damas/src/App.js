import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Botonera(props) {
  //COMPONENTE QUE RENDERIZA EL TABLERO
  return (
    Array(8).fill(Array(8).fill(null)).map((v, i) => <Row style={{ margin: '1rem' }} xs='8' key={i}>{v.map((c, j) => {
      let elemento = undefined;
      props.tabla.find(v => v.find(c => {
        if (c.split(",")[0] == i && c.split(",")[1] == j)
          elemento = c;
      }))
      if (elemento) {
        if (elemento.split(",")[2] === "secondary")
          return <Col key={i + "" + j} style={{ padding: 0 }}><Button style={{ width: '100%', height: '100%' }} color={elemento.split(",")[2]}></Button></Col>
        else
          return <Col key={i + "" + j} style={{ padding: 0 }}><Button style={{ width: '100%', height: '100%' }} color={elemento.split(",")[2]} onClick={() => props.onClick(i, j)}></Button></Col>
      } else {
        return <Col key={i + "" + j} style={{ padding: 0 }}><Button style={{ width: '100%', height: '100%' }} color="secondary" outline></Button></Col>
      }
    })}</Row>
    )
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //DEFINE EL ESTADO DE TU COMPONENTE PRINCIPAL
      //Recuerda que si defines una tabla 8x8 tu estado será inválido.
      tabla: Array(4),
    };
  }

  puedeMover(f, c) {
    let aux = JSON.parse(JSON.stringify(this.state.tabla));
    let izq = undefined;
    aux.find(v => v.find(c => {
      if (c === (f - 1) + "," + (c - 1) + ",secondary")
        izq = c;
    }))
    let der = undefined;
    aux.find(v => v.find(c => {
      if (c === (f - 1) + "," + (c + 1) + ",secondary")
        der = c;
    }))
    if (izq || der) {
      return true;
    } else {
      return false;
    }

  }

  onClick(f, c) {
    if (this.puedeMover(f, c)) {
      this.colorear(f, c);
    }
  }

  colorear(f, c) {
    console.log(this.state.tabla)
    let aux = JSON.parse(JSON.stringify(this.state.tabla));
    let tableroEntero = Array(8).fill(Array(8).fill(null));
    const divisor = 2;
    tableroEntero.forEach((fila, i) => {
      let array = [];
      fila.forEach((columna, j) => {
        if (i == f && j == c) {
          array.push(i + "," + j + ",danger")
        } else if (i == 0 || i % divisor === 0) {
          if (j % divisor !== 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        } else {
          if (j % divisor === 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        }
      })
      aux.push(array);
    })
    this.setState({ tabla: aux.filter(v => v != null) });
  }

  componentWillMount() {
    //ESTE MÉTODO SE EJECUTARÁ AL PRINCIPIO DE LA APLICACIÓN. ANTES DE RENDERIZAR.
    let aux = JSON.parse(JSON.stringify(this.state.tabla));
    let tableroEntero = Array(8).fill(Array(8).fill(null));
    const divisor = 2;
    tableroEntero.forEach((fila, i) => {
      let array = [];
      fila.forEach((columna, j) => {
        if (i == 0 || i % divisor === 0) {
          if (j % divisor !== 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        } else {
          if (j % divisor === 0) {
            if (i < 5) {
              array.push(i + "," + j + ",secondary")
            } else {
              array.push(i + "," + j + ",success")
            }
          }
        }
      })
      aux.push(array);
    })
    this.setState({ tabla: aux.filter(v => v != null) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* //AQUÍ TIENES QUE RENDERIZAR EL COMPONENTE BOTONERA */}
          <Botonera tabla={this.state.tabla} onClick={(i, j) => this.onClick(i, j)} />
        </header>
      </div>
    );
  }
}
export default App;
