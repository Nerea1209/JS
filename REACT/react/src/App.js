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
      matriz: MINAS,
      posicion: [0,0],
      minas: 10
    }
  }
  jugar () {

  }
  aumentar() {

  }
  disminuir() {

  }
  onClick() {
    // Mover arriba, abajo, derecha o izquierda controlando no salirnos de la matriz
  }
  render() {
    return (
      <div className="App">
          <div id='jugar' style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent:"space-evenly", margin: "2rem", padding: "1rem"}}>
            <Selector />
            <Campo matriz={this.state.matriz} />
            <Botonera />
          </div>
      </div>
    );
  }
}


export default App;