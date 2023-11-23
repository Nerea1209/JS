import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Spinner } from 'reactstrap';

function Botoncico (props) {
  return (
    <Button color={props.color} outline onClick={props.cambia}>{props.value}</Button>
  );
}

function Spinico (props) {
  return (
    <Spinner color={props.color} type="grow" />
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "primary",
    }
  }
  cambia({ c }) {
    this.setState({color: c})
  }
  render() {
    return (
      <div className="App">
        <Botoncico color="primary" value="marinico" cambia={() => this.cambia({c: })} />
        <Botoncico color="secondary" value="grisico" cambia={() => this.cambia({c: "secondary"})}/>
        <Botoncico color="success" value="verdecico" cambia={() => this.cambia({c: "success"})}/>
        <Botoncico color="info" value="azulico" cambia={() => this.cambia({c: "info"})}/>
        <Botoncico color="warning" value="amarillico" cambia={() => this.cambia({c: "warning"})}/>
        <Botoncico color="danger" value="rojico" cambia={() => this.cambia({c: "danger"})}/> <br />
        <Spinico color={this.state.color} />
      </div>
    );    
  }
}

export default App;
