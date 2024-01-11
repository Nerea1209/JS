import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function Borrar(props) {
  return(
    <button className='borrar' deseo={props.deseo} onClick={(deseo) => props.quitar(props.deseo)}>
      Borrar {props.deseo}
    </button>
  );
}

function PrintDeseo(props) {
  return(
    <li>{props.deseo}</li>
  );
}

class DesireList extends Component {
  render() {
    return (
      <ul>
        {this.props.deseos.map(d => {
          return(
          <li>
            {d} &nbsp;
            <Borrar deseo={d} quitar={(e) => this.props.quitar(e)} />
          </li>
        )})}
      </ul>
    );
  }
}

class Desire extends Component {
  render () {
    return (
      <form onSubmit={this.props.onAddDeseo}>
        <input type="text" placeholder='Escribe tu deseo' name='deseo'/>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["GAMBAS", "JAMÓN"]
    }
  }
  quitar(elemento) {
    var aux = [];
    if (this.state.deseos && this.state.deseos !== null && this.state.deseos !== undefined) aux = this.state.deseos.slice();
    aux = aux.filter(i => i !== elemento);
    this.setState({deseos: aux})
  }
  handleAniadirDeseo(event) {
    event.preventDefault();
    var aux = [];
    if (this.state.deseos && this.state.deseos !== null && this.state.deseos !== undefined) aux = this.state.deseos.slice();
    aux.push(event.target.deseo.value);
    this.setState({deseos: aux})
  }
  render() {
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lista de deseos.</h2>
        </div>
        <div>
          <p><strong>Añade tu regalo favorito</strong></p>
          <DesireList deseos={this.state.deseos} quitar={(e) => this.quitar(e)}/>
          <Desire onAddDeseo={this.handleAniadirDeseo.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
