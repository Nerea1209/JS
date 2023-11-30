import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Botonera from './componentes/BotoneraComponent ';
import Campo from './componentes/CampoComponent';
import { MINAS } from './shared/datos';
import Selector from './componentes/SelectorMinas';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matriz: Array(10).fill(Array(10).fill(0)),
      posicion: [0,0],
      minas: 10,
      matrizSolucion: Array(10).fill(Array(10).fill(0)),
      display: "block",
    }
  }
  // Función que devuleve un numero aleatorio entre el rango dado
  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.round(Math.random() * horquilla + min);
}
  jugar () {
    m = Array(10).fill(Array(10).fill(0));
    for (let i = 0; i < this.state.minas; i++) {
      let fila = this.aleatorio(0, m.length);
      let columna = this.aleatorio(0, m.length);
      m[fila][columna] = 1;
    }
    this.setState({matrizSolucion: m})
    this.setState({display: "block"})
  }
  aumentar() {
    if (this.state.minas < 100) {
      this.setState({minas: (this.state.minas + 1)})
    }
  }
  disminuir() {
    if (this.state.minas > 1) {
      this.setState({minas: (this.state.minas - 1)})
    }
  }
  onClick() {
    // Mover arriba, abajo, derecha o izquierda controlando no salirnos de la matriz
  }
  render() {
    return (
      <div className="App">
          <div id='jugar' style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent:"space-evenly", margin: "2rem", padding: "1rem"}}>
            <Selector 
              minas={this.state.minas}
              onClickMas = {() => this.aumentar()}
              onClickMenos = {() => this.disminuir()}
              />
            <Campo style={{display: this.state.display}} matriz={this.state.matriz} posicion={this.state.posicion}/>
            <Botonera style={{display: this.state.display}} />
          </div>
      </div>
    );
  }
}


export default App;