import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confetti from 'react-dom-confetti';


const MapaBotones = (props) => {
  let lista = props.lista.map((v, i) => v.map((k, j) => {
    if (k === null) return <Button key={i + "" + j} outline onClick={() => props.click(i, j)} />;
    else if (k === "primary") return <Button key={i + "" + j} color='primary' />
    else return <Button key={i + "" + j} color='danger' />
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
      config : {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: "181",
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "12px",
        height: "12px",
        perspective: "500px",
        position: 'absolute',
        colors: ["blue"]
      }
    }
  }
  cambiarTurno(i, j) {
    if (!this.state.finalizado && i === 0) {
      let color = undefined;
      if (this.state.turno === true) {
        this.setState({ h1: "Turno: Rojos" })
        color = 0;
      } else {
        this.setState({ h1: "Turno: Azules" })
        color = 1;
      }
      let lista = JSON.parse(JSON.stringify(this.state.listaBotones));


      for (let k = (lista.length - 1); k >= 0; k--) {
        if (lista[k][j] == null) {
          lista[k][j] = this.state.listaColores[color];
          console.log(k)
          console.log(j)
          this.setState({ posicionFicha: [k, j] });
          setTimeout(() => this.ganador(), 100);
          break;
        }
      }
      this.setState({ turno: !this.state.turno })
      this.setState({ listaBotones: lista })
    }
  }
  ganador() {
    let posicion = JSON.parse(JSON.stringify(this.state.posicionFicha));
    console.log(this.state.posicionFicha)

    let cont = 0;
    for (let i = posicion[0]; i < this.state.listaBotones.length; i++) {
      if (this.state.listaBotones[posicion[0]][posicion[1]] === this.state.listaBotones[i][posicion[1]]) {
        cont++;
      } else {
        cont = 0;
        break;
      }
    }

    let raya = [];
    for (let j = 0; j < this.state.listaBotones[0].length; j++) {
      if (this.state.listaBotones[posicion[0]][posicion[1]] === this.state.listaBotones[posicion[0]][j]) {
        raya.push(posicion[0] + "," + j);
        if (raya.length >= 4) {
          break;
        }
      } else {
        raya = []

      }
    }

    console.log(raya)

    if (cont >= 4 || raya.length >= 4) {
      console.log("ganan")
      if (this.state.listaBotones[posicion[0]][posicion[1]] === "primary") {
        this.setState({ h1: "Turno: Ganan los azules" })
        this.setState({config: {
          angle: 90,
          spread: 360,
          startVelocity: 40,
          elementCount: "181",
          dragFriction: 0.12,
          duration: 3000,
          stagger: 3,
          width: "12px",
          height: "12px",
          perspective: "500px",
          position: 'absolute',
          colors: ["blue"]
        }})
      }
      if (this.state.listaBotones[posicion[0]][posicion[1]] === "danger") {
        this.setState({ h1: "Turno: Ganan los rojos" })
        this.setState({config: {
          angle: 90,
          spread: 360,
          startVelocity: 40,
          elementCount: "181",
          dragFriction: 0.12,
          duration: 3000,
          stagger: 3,
          width: "12px",
          height: "12px",
          perspective: "500px",
          position: 'absolute',
          colors: ["red"]
        }})
      }
      this.setState({ finalizado: true })
    }
  }
  click(i, j) {
    this.setState({ posicionClick: [i, j] })
    this.cambiarTurno(i, j);
  }

  volverAJugar() {
    this.setState({ finalizado: false })
    this.setState({ listaBotones: Array(9).fill(Array(9).fill(null)) })
    this.setState({ posicionClick: [0, 0] })
    this.setState({ posicionFicha: [0, 0] })
    this.setState({ turno: true })
    this.setState({ h1: "Turno: Azules" })
  }
  // componentWillMount() {
  //   // Utilízalo si necesitas hacer algo antes de renderizar
  // }
  render() {
    return (
      <div className="App">
        <h1>{this.state.h1}</h1>
        <div id='mapa'>
          <MapaBotones lista={this.state.listaBotones} click={(x, y) => this.click(x, y)} />
        </div>
        <Confetti className='confetti' active={ this.state.finalizado } config={ this.state.config } />
        {this.state.finalizado && <Button color="warning" onClick={() => this.volverAJugar()}>Volver a jugar</Button>}
      </div>
    );
  }
}
export default App;
