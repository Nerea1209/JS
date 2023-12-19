import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapaBotones = (props) => {
  let lista = props.lista.map((v, i) => v.map((k, j) => {
    if (k === null) return <Button key={i+""+j} outline onClick={() => props.click(i, j)}/>;
    else if(k === "primary") return <Button key={i+""+j} color='primary'/>
    else return <Button key={i+""+j} color='danger'/>
  }));
  return (
    <>
    {lista}
    </>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(Array(9).fill(null))/*aquí almaceno los colores de los botones*/,
      listaColores: ["primary", "danger"],
      // tendrás que añadir más atributos al state como el turno...
      posicionClick: [0, 0],
      posicionFicha: [0, 0],
      finalizado: false,
      turno: true,
      h1: "Turno: Azules",
    }
  }
  cambiarTurno(i, j) {
    if (!this.state.finalizado && i === 0) {
      let color = undefined;
      if(this.state.turno === false) {
        this.setState({h1: "Turno: Azules"})
        color = 0;
      } else {
        this.setState({h1: "Turno: Rojos"})
        color = 1;
      }
      let lista = JSON.parse(JSON.stringify(this.state.listaBotones));
      

      for (let k = (lista.length - 1); k >= 0 ; k--) {
        if (lista[k][j] == null) {
          lista[k][j] = this.state.listaColores[color];
          this.setState({posicionFicha: [k, j]});
          break;
        }
      }
      this.setState({turno: !this.state.turno})
      this.setState({listaBotones: lista})
    }
  }
  ganador() {
    let posicion = JSON.parse(JSON.stringify(this.state.posicionFicha));
    // if (posicion[0])
  }
  click(i, j) {
    this.setState({posicionClick: [i, j]})
    this.cambiarTurno(i, j);
  }
  // componentWillMount() {
  //   // Utilízalo si necesitas hacer algo antes de renderizar
  // }
  render() {
    return (
      <div className="App" style={{width: "250px"}}>
        <h1>{this.state.h1}</h1>
        <MapaBotones lista={this.state.listaBotones} click={(x, y) => this.click(x, y)} />
      </div>
    );
  }
}
export default App;
