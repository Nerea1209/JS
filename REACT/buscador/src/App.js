import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from 'reactstrap'
import "./App.css";
import React, { useState } from 'react';

function Lista(props) {
  return (
    <List>
      {props.pueblos.map((v, i) => <li key={i} >{v}</li>)}
    </List>
  )
}

function Buscador(props) {
  return (
    <form action='#' id='form_buscador'>
      <input type="text" name='buscador' placeholder='Buscador de pueblos...' value={props.buscador} onChange={(event) => props.handleChange(event)} />
    </form>
  )
}

function App() {
  const [pueblos, setPueblos] = useState(["Estepona", "Marbella", "Nueva Andalucía", "San Pedro", "Puerto Banús", "Manilva"]);
  const [buscador, setBuscador] = useState("");
  const handleChange = (event) => {
    if (event.target.name === "buscador") {
      setBuscador(event.target.value);
    }
  }
  const comprobarPueblos = () => {
    let aux = JSON.parse(JSON.stringify(pueblos));
    if (buscador !== "") {
      let regex = "^" + buscador.toLowerCase() + "*";
      return aux.filter(v => v.toLowerCase().match(regex) != '' && v.toLowerCase().match(regex) != null);
    } else {
      return aux;
    }
  }
  return (
    <div className="App">
      <h1>Pueblos</h1>
      <Buscador buscador={buscador} handleChange={(event) => handleChange(event)} />
      <Lista pueblos={comprobarPueblos()} />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pueblos: ["Estepona", "Marbella", "Nueva Andalucía", "San Pedro", "Puerto Banús", "Manilva"],
//       buscador: "",
//     }
//   }
//   handleChange (event) {
//     if (event.target.name === "buscador") {
//       this.setState({ buscador: event.target.value });
//     }
//   }
//   comprobarPueblos() {
//     let aux = JSON.parse(JSON.stringify(this.state.pueblos));
//     if (this.state.buscador !== "") {
//       let regex = "^" + this.state.buscador.toLowerCase() + "*";
//       return aux.filter(v => v.toLowerCase().match(regex) != '' && v.toLowerCase().match(regex) != null) ;
//     } else {
//       return aux;
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Pueblos</h1>
//         <Buscador buscador={this.state.buscador} handleChange={(event) => this.handleChange(event)} />
//         <Lista pueblos={this.comprobarPueblos()} />
//       </div>
//     );
//   }

// }

export default App;
