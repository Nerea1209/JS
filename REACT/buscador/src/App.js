import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from 'reactstrap'
import "./App.css";
import React, { useState } from 'react';


function App() {
  const [pueblos, setPueblos] = useState(["Estepona", "Marbella", "Nueva Andalucía", "San Pedro", "Puerto Banús", "Alcorcón", "Manilva"]);
  const [buscador, setBuscador] = useState('');
  const handleChange = (event) => {
    if (event.target.name === "buscador") {
      setBuscador(event.target.value);
      console.log(buscador)
      if (buscador !== "") {
        let aux = JSON.parse(JSON.stringify(pueblos));
        let regex = "^" + buscador.toLowerCase() + "*";
        console.log(aux.map(v => {
          if (v.toLowerCase().match(regex) != '') return v
          else return undefined
        }).filter(v => v != undefined));
        setPueblos(aux);
      }
    }
  }
  return (
    <div className="App">
      <h1>Pueblos</h1>
      <form action='#' id='form_buscador'>
        <input type="text" name='buscador' placeholder='Buscador de pueblos...' value={buscador} onChange={handleChange} />
      </form>
      <List>
        {pueblos.map((v, i) => <li key={i} >{v}</li>)}
      </List>
    </div>
  );
}

export default App;
