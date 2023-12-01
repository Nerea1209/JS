import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Botonera from './componentes/BotoneraComponent ';
import Campo from './componentes/CampoComponent';
import { MINAS } from './shared/datos';
import Selector from './componentes/SelectorMinas';
import { Button, Col } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matriz: Array(10).fill(Array(10).fill(0)),
      posicion: [0, 0],
      colorPosicion: "secondary",
      textoPosicion: "0",
      minas: 10,
      matrizMinas: Array(10).fill(Array(10).fill(0)),
      display: "block",
      camino: [],
      finalizado: true,
    }
  }
  // Función que devuleve un numero aleatorio entre el rango dado
  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.round(Math.random() * horquilla + min);
  }
  jugar() {
    this.setState({ finalizado: false })
    this.setState({ posicion: [0, 0] })
    let m = JSON.parse(JSON.stringify(Array(10).fill(Array(10).fill(0))));
    for (let i = 0; i < this.state.minas; i++) {
      let fila = this.aleatorio(1, m.length - 1);

      let columna = this.aleatorio(1, m.length - 1);

      m[fila][columna] = 1;
    }

    m = m.map(v => v.map(l => {
      if (l != 1) return Infinity;
      else return l;
    }))

    let c = true;
    while (c) {
      c = false;
      for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
          // Arriba
          if (i > 0 && m[i][j] > m[i - 1][j] + 1) {
            m[i][j] = m[i - 1][j] + 1;
            c = true;
          }
          // Abajo
          if (i < m.length - 1 && m[i][j] > m[i + 1][j] + 1) {
            m[i][j] = m[i + 1][j] + 1;
            c = true;
          }
          // Derecha
          if (j < m[i].length - 1 && m[i][j] > m[i][j + 1] + 1) {
            m[i][j] = m[i][j + 1] + 1;
            c = true;
          }
          // Izquierda
          if (j > 0 && m[i][j] > m[i][j - 1] + 1) {
            m[i][j] = m[i][j - 1] + 1;
            c = true;
          }
          // Diagonal arriba derecha
          if (j < m[i].length - 1 && i > 0 && m[i][j] > m[i - 1][j + 1] + 1) {
            m[i][j] = m[i - 1][j + 1] + 1;
            c = true;
          }
          // Diagonal arriba izquierda
          if (j > 0 && i > 0 && m[i][j] > m[i - 1][j - 1] + 1) {
            m[i][j] = m[i - 1][j - 1] + 1;
            c = true;
          }
          // Diagonal abajo derecha
          if (j < m[i].length - 1 && i < m.length - 1 && m[i][j] > m[i + 1][j + 1] + 1) {
            m[i][j] = m[i + 1][j + 1] + 1;
            c = true;
          }
          // Diagonal abajo izquierda
          if (j > 0 && i < m.length - 1 && m[i][j] > m[i + 1][j - 1] + 1) {
            m[i][j] = m[i + 1][j - 1] + 1;
            c = true;
          }
        }
      }
    }

    this.setState({ matrizMinas: m })
    setTimeout(() => this.darColor(), 250);
    setTimeout(() => this.actualizar(), 250);
  }
  minevancic() {
    // Cambiamos a fuerza bruta
    let array = JSON.parse(JSON.stringify(this.state.matrizMinas));
    let c = true;
    while (c) {
      c = false;
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          // Arriba
          if (i > 0 && array[i][j] > array[i - 1][j] + 1) {
            array[i][j] = array[i - 1][j] + 1;
            c = true;
          }
          // Abajo
          if (i < array.length - 1 && array[i][j] > array[i + 1][j] + 1) {
            array[i][j] = array[i + 1][j] + 1;
            c = true;
          }
          // Derecha
          if (j < array[i].length - 1 && array[i][j] > array[i][j + 1] + 1) {
            array[i][j] = array[i][j + 1] + 1;
            c = true;
          }
          // Izquierda
          if (j > 0 && array[i][j] > array[i][j - 1] + 1) {
            array[i][j] = array[i][j - 1] + 1;
            c = true;
          }
          // Diagonal arriba derecha
          if (j < array[i].length - 1 && i > 0 && array[i][j] > array[i - 1][j + 1] + 1) {
            array[i][j] = array[i - 1][j + 1] + 1;
            c = true;
          }
          // Diagonal arriba izquierda
          if (j > 0 && i > 0 && array[i][j] > array[i - 1][j - 1] + 1) {
            array[i][j] = array[i - 1][j - 1] + 1;
            c = true;
          }
          // Diagonal abajo derecha
          if (j < array[i].length - 1 && i < array.length - 1 && array[i][j] > array[i + 1][j + 1] + 1) {
            array[i][j] = array[i + 1][j + 1] + 1;
            c = true;
          }
          // Diagonal abajo izquierda
          if (j > 0 && i < array.length - 1 && array[i][j] > array[i + 1][j - 1] + 1) {
            array[i][j] = array[i + 1][j - 1] + 1;
            c = true;
          }
        }
      }
    }
    this.setState({ matrizMinas: array })
  }
  darColor() {
    let coordenada = this.state.posicion;
    switch (this.state.matrizMinas[coordenada[0]][coordenada[1]]) {
      case 0:
        this.setState({ colorPosicion: "secondary" });
        break;
      case 1:
        this.setState({ colorPosicion: "danger" });
        break;
      case 2:
        this.setState({ colorPosicion: "warning" });
        break;
      case 3:
        this.setState({ colorPosicion: "success" });
        break;
      default:
        this.setState({ colorPosicion: "primary" });
        break;
    }
    this.setState({ textoPosicion: this.state.matrizMinas[coordenada[0]][coordenada[1]] });
  }
  actualizar() {
    let ma = JSON.parse(JSON.stringify(this.state.matriz));
    const { camino, posicion, colorPosicion, textoPosicion } = this.state;

    console.log(camino);
    console.log(
      ma.map((v, i) =>
        v.map((k, j) => {
          let elemento = (
            <Col key={i + "" + j} style={{ padding: ".1rem" }}>
              <Button style={{ width: "100%", height: "auto" }}>{k}</Button>
            </Col>
          );

          const caminoElemento = camino.find(u => u.key === i + "" + j);
          if (caminoElemento) {
            elemento = caminoElemento;
          }

          if (i === posicion[0] && j === posicion[1]) {
            let arr = [...camino];
            arr.push(
              <Col key={i + "" + j} style={{ padding: ".1rem" }}>
                <Button style={{ width: "100%", height: "auto" }} color={colorPosicion}>
                  {textoPosicion}
                </Button>
              </Col>
            );
            this.setState({ camino: arr });
            elemento = (
              <Col key={i + "" + j} style={{ padding: ".1rem" }}>
                <Button style={{ width: "100%", height: "auto" }} color={colorPosicion} outline>
                  {textoPosicion}
                </Button>
              </Col>
            );
          }

          return elemento;
        })
      )
    );

    this.setState({ matriz: ma });
  }

  aumentar() {
    if (this.state.minas < 100) {
      this.setState({ minas: (this.state.minas + 1) })
    }
  }
  disminuir() {
    if (this.state.minas > 1) {
      this.setState({ minas: (this.state.minas - 1) })
    }
  }
  onClick(movimiento) {
    console.log(movimiento)
    // Mover arriba, abajo, derecha o izquierda controlando no salirnos de la matriz
    if (!this.state.finalizado) {
      let pos = JSON.parse(JSON.stringify(this.state.posicion))

      // ARRIBA
      if (movimiento == "Arriba") {
        if (pos[0] > 0) {
          pos = [pos[0] - 1, pos[1]];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 10);
          setTimeout(() => this.actualizar(), 10);
        } else {
          this.setState({ finalizado: true })
        }
      }

      if (movimiento == "Abajo") {
        if (pos[0] < this.state.matriz[0].length - 1) {
          pos = [pos[0] + 1, pos[1]];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 10);
          setTimeout(() => this.actualizar(), 10);
        } else {
          this.setState({ finalizado: true })
        }
      }

      if (movimiento == "Izquierda") {
        if (pos[1] > 0) {
          pos = [pos[0], pos[1] - 1];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 10);
          setTimeout(() => this.actualizar(), 10);
        } else {
          this.setState({ finalizado: true })
        }
      }

      if (movimiento == "Derecha") {
        if (pos[1] < this.state.matriz.length - 1) {
          pos = [pos[0], pos[1] + 1];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 10);
          setTimeout(() => this.actualizar(), 10);
        } else {
          this.setState({ finalizado: true })
        }
      }
    }

  }
  render() {
    return (
      <div className="App">
        <div id='jugar' style={{ display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-evenly", margin: "2rem", padding: "1rem" }}>
          <Selector
            minas={this.state.minas}
            onClickMas={() => this.aumentar()}
            onClickMenos={() => this.disminuir()}
            onClickJugar={() => this.jugar()}
          />
          {!this.state.finalizado && <Campo
            style={{ display: this.state.display }}
            matriz={this.state.matriz}
            posicion={this.state.posicion}
            colorPosicion={this.state.colorPosicion}
            textoPosicion={this.state.textoPosicion}
            matrizMinas={this.state.matrizMinas}
            actualizar={() => this.actualizar()}
            color={() => this.darColor()}
            camino={this.state.camino}
          />}
          {!this.state.finalizado && <Botonera
            style={{ display: this.state.display }}
            onClick={(x) => this.onClick(x)}
          />}
        </div>
      </div>
    );
  }
}


export default App;