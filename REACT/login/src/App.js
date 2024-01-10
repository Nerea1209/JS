import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './Componentes/AppLogin';
import Menu from './Componentes/Menu';
import "./App.css";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: "UNO",
      user: "nerea",
      password: "1234",
      login: false,
      error: undefined
    }
  }
  comprobarUsuario(usuario, clave) {
    if (usuario === this.state.user && clave === this.state.password)
      this.setState({ login: true })
    else{
      if (usuario === "" || clave === "") this.setState({error: "Fill in all the information"})
      else this.setState({error: "Username / Password failed"})
    } 
  }
  render() {
    console.log(this.state.login)
    return (
      <div className="App">
        {!this.state.login&& <AppLogin onClick={(x, y) => this.comprobarUsuario(x, y)} error={this.state.error} />}
        {this.state.login && <Menu menuItem={this.state.menuItem} onClick={(x) => this.setState({ menuItem: x })} />}
      </div>
    );
  }
}

export default App;
