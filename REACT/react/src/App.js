import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Botonera from './componentes/BotoneraComponent ';
import Campo from './componentes/CampoComponent';
import SelectorMinas from './componentes/SelectorMinas';
import Ventana from './componentes/ModalComponent';
import { Button, Col } from 'reactstrap';
import Selector from './componentes/SelectorFilasColumnas';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filas: 5,
      columnas: 5,
      matriz: Array(5).fill(Array(5).fill("_")),
      posicion: [0, 0],
      colorPosicion: "secondary",
      textoPosicion: "0",
      minas: 2,
      matrizMinas: Array(5).fill(Array(5).fill("_")),
      camino: [],
      finalizado: true,
      ganado: false,
      empezado: false,
    }
  }
  // Función que devuleve un numero aleatorio entre el rango dado
  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.round(Math.random() * horquilla + min);
  }
  // Función para poner las minas y llamar a minevancic para poner distancias
  jugar() {
    // Pone los estados a 0
    this.setState({ finalizado: false })
    this.setState({ empezado: true })
    this.setState({ posicion: [0, 0] })
    this.setState({ camino: [] })
    this.setState({ matriz: Array(this.state.filas).fill(Array(this.state.columnas).fill("_")) });

    // Creamos la matriz con las minas
    do {
      var m = JSON.parse(JSON.stringify(Array(this.state.filas).fill(Array(this.state.columnas).fill("_"))));
      for (let i = 0; i < this.state.minas; i++) {
        let fila = this.aleatorio(1, m.length - 2);
        let columna = this.aleatorio(1, m.length - 2);
        m[fila][columna] = 1;
      }
      this.comprobarMinas(m, 0, 0);
    } while (this.contarA(m) > 0);

    // El resto lo ponemos Infinity por la forma de poner la distancia a las bombas
    m = m.map(v => v.map(l => {
      if (l != 1) return Infinity;
      else return 0;
    }))
    // Ponemos la distancia a cada bomba
    this.minevancic(m);
    // Actualizamos los cambios para guardar la matriz resultante
    setTimeout(() => this.setState({ matrizMinas: m }), 100)
    setTimeout(() => this.darColor(), 200);
    setTimeout(() => this.actualizar(), 250);
  }
  // Función para resolver las distancias a las minas
  minevancic(array) {
    // Cambiamos a fuerza bruta
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
  // Función que da color a los botones según la distancia a la bomba
  darColor() {
    let coordenada = this.state.posicion;
    switch (this.state.matrizMinas[coordenada[0]][coordenada[1]]) {
      case "_":
        this.setState({ colorPosicion: "secondary" });
        break;
      case 0:
        this.setState({ colorPosicion: "danger" });
        break;
      case 1:
        this.setState({ colorPosicion: "warning" });
        break;
      case 2:
        this.setState({ colorPosicion: "success" });
        break;
      default:
        this.setState({ colorPosicion: "primary" });
        break;
    }
    this.setState({ textoPosicion: this.state.matrizMinas[coordenada[0]][coordenada[1]] });
  }
  // Muestra el camino, la posición en la que vamos y los que nos queda por descubrir
  actualizar() {
    let ma = JSON.parse(JSON.stringify(Array(this.state.filas).fill(Array(this.state.columnas).fill("_"))));
    const { camino, posicion, colorPosicion, textoPosicion } = this.state;

    // Devuelve los elementos con un estilo según la posición, el camino o los restantes
    ma.map((v, i) =>
      v.map((k, j) => {
        let elemento = (
          <Col key={i + "" + j} style={{ padding: ".1rem" }}>
            <Button style={{ width: "100%", height: "auto" }}>{k}</Button>
          </Col>
        );

        const caminoElemento = camino.find(u => u.key === i + "" + j);
        if (caminoElemento && i != posicion[0] && j != posicion[1]) {
          elemento = caminoElemento;
        }

        if (i === posicion[0] && j === posicion[1]) {
          let arr = [...camino]; // Copia referenciada
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

    );

    this.setState({ matriz: ma });
  }
  aumentarMinas() {
    if (this.state.minas < (Math.floor((this.state.filas * this.state.columnas) / 2))) {
      this.setState({ minas: (this.state.minas + 1) })
    }
  }
  disminuirMinas() {
    if (this.state.minas > 1) {
      this.setState({ minas: (this.state.minas - 1) })
    }
  }
  aumentar(valor) {
    if (valor == "filas" && this.state.filas < 10) {
      this.setState({ filas: (this.state.filas + 1) })
    }
    if (valor == "columnas" && this.state.columnas < 10) {
      this.setState({ columnas: (this.state.columnas + 1) })
    }
  }
  disminuir(valor) {
    if (valor == "filas" && this.state.filas > 1) {
      this.setState({ filas: (this.state.filas - 1) })
    }
    if (valor == "columnas" && this.state.columnas > 1) {
      this.setState({ columnas: (this.state.columnas - 1) })
    }
  }
  // Función para mover la posición con la botonera
  onClick(movimiento) {
    // Mover arriba, abajo, derecha o izquierda controlando no salirnos de la matriz
    if (!this.state.finalizado) {
      let pos = JSON.parse(JSON.stringify(this.state.posicion))

      // ARRIBA
      if (movimiento == "Arriba") {
        if (pos[0] > 0) {
          pos = [pos[0] - 1, pos[1]];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 100);
          setTimeout(() => this.actualizar(), 250);
          // this.darColor();
          // this.actualizar();
        } else {
          this.setState({ finalizado: true })
          this.setState({ ganado: false })
        }
      }

      if (movimiento == "Abajo") {
        if (pos[0] < this.state.filas - 1) {
          pos = [pos[0] + 1, pos[1]];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 100);
          setTimeout(() => this.actualizar(), 250);
          // this.darColor();
          // this.actualizar();
        } else {
          this.setState({ finalizado: true })
          this.setState({ ganado: false })
        }
      }

      if (movimiento == "Izquierda") {
        if (pos[1] > 0) {
          pos = [pos[0], pos[1] - 1];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 100);
          setTimeout(() => this.actualizar(), 250);
          // this.darColor();
          // this.actualizar();
        } else {
          this.setState({ finalizado: true })
          this.setState({ ganado: false })
        }
      }

      if (movimiento == "Derecha") {
        if (pos[1] < this.state.columnas - 1) {
          pos = [pos[0], pos[1] + 1];
          this.setState({ posicion: pos })
          setTimeout(() => this.darColor(), 100);
          setTimeout(() => this.actualizar(), 250);
          // this.darColor();
          // this.actualizar();
        } else {
          this.setState({ finalizado: true })
          this.setState({ ganado: false })
        }
      }

      if (this.state.matrizMinas[pos[0]][pos[1]] === 0) {
        this.setState({ ganado: false })
        this.setState({ finalizado: true })
      }

      if (pos[0] == this.state.filas - 1 && pos[1] == this.state.columnas - 1) {
        this.setState({ ganado: true })
        this.setState({ finalizado: true })
      }
    }
  }
  // Función que cancela jugar con los mismos valores en la modal
  onclickNo() {
    this.setState({ empezado: false })
  }
  comprobarMinas(array, i, j) {
    // Si ya hemos pintado la bomba (evita bucle infinito)
    if (array[i][j] == 'A') {
      array[i][j] = 'a';
      if (i > 0 && array[i - 1][j] != 'a') {
        this.comprobarMinas(array, i - 1, j);
      }
      if (i < array.length - 1 && array[i + 1][j] != 'a') {
        this.comprobarMinas(array, i + 1, j);
      }
      if (j > 0 && array[i][j - 1] != 'a') {
        this.comprobarMinas(array, i, j - 1);
      }
      if (j < array[i].length - 1 && array[i][j + 1] != 'a') {
        this.comprobarMinas(array, i, j + 1);
      }
    }
    // Si no es una bomba
    if (array[i][j] != 'a' && array[i][j] != '1') {
      array[i][j] = 'A';
      if (i > 0 && array[i - 1][j] != 'a') {
        this.comprobarMinas(array, i - 1, j);
      }
      if (i < array.length - 1 && array[i + 1][j] != 'a') {
        this.comprobarMinas(array, i + 1, j);
      }
      if (j > 0 && array[i][j - 1] != 'a') {
        this.comprobarMinas(array, i, j - 1);
      }
      if (j < array[i].length - 1 && array[i][j + 1] != 'a') {
        this.comprobarMinas(array, i, j + 1);
      }
    }
  }

  // Función que cuenta las A que no están unidas
  contarA(array) {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] == 'A') {
          cont += 1;
        }
      }
    }
    return cont;
  }
  render() {
    return (
      <div style={{ margin: "2rem", padding: "1rem" }}>
        <h1>Minevancic</h1>

        {/* Si no ha empezado el juego, aparece el selector de filas, columnas y minas */}
        {this.state.finalizado && <Selector
          filas={this.state.filas}
          columnas={this.state.columnas}
          onClickMas={(x) => this.aumentar(x)}
          onClickMenos={(x) => this.disminuir(x)}
        />}
        {this.state.finalizado && <SelectorMinas
          minas={this.state.minas}
          onClickMas={() => this.aumentarMinas()}
          onClickMenos={() => this.disminuirMinas()}
          onClickJugar={() => this.jugar()}
        />}

        {/* Si ha empezado muestra el campo y la botonera para cambiar la posición */}
        {this.state.empezado && <Campo
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
          onClick={(x) => this.onClick(x)}
        />}

        {/* Si ha terminado una partida y gana, muestra una modal de haber ganado */}
        {this.state.finalizado && this.state.ganado && this.state.empezado &&
          <Ventana
            toggle={() => this.toggleModal()}
            title="¡HAS GANADO!"
            onClickSi={() => this.jugar()}
            onClickNo={() => this.onclickNo()} />}

        {/* Si ha terminado una partida y pierde, muestra una modal de haber perdido */}
        {this.state.finalizado && !this.state.ganado && this.state.empezado &&
          <Ventana
            toggle={() => this.toggleModal()}
            title="¡HAS PERDIDO!"
            onClickSi={() => this.jugar()}
            onClickNo={() => this.onclickNo()} />}
      </div>
    );
  }
}

export default App;