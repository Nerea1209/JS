import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

function Boton (props) {
  return (
    <Button color={props.color} onClick={props.cambia} >{props.texto}</Button>
  );
}

class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow",
    }
  }
  cambia({c}) {
    this.setState({color: c});
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: this.state.color, padding: "20px"}}>
        <Boton color="primary" texto="Azul" cambia={() => this.cambia({c: "blue"})} />
        <Boton color="danger" texto="Rojo" cambia={() => this.cambia({c: "red"})} />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default ColorChanger;
