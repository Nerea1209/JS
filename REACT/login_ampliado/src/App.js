import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin'
import Menu from './componentes/Menu'
import { Component } from 'react';
import { PHPLOGIN } from './componentes/Datos';
import axios from 'axios';
import { MD5 } from 'crypto-js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: "UNO",
      logged: false,
      value: "",
    }
  }

  setValue(d) {
    this.setState({ value: d })
  }

  changeMenu(item) {
    this.setState({ menuItem: item })
  }

  userLogin(telefono, password) {
    /*
    if (telefono=="Myfpschool" && password=="2023"){
      this.setState({logged:true})
    }
    */
    let clave = MD5(password).toString();
    axios.post(PHPLOGIN, JSON.stringify({
      telefono: telefono,
      password: clave,
    }))
      .then(res => {
        console.log(res.data.usuario);
        if (res.data.usuario !== undefined) {
          this.setState({ logged: true });
        }
      })
  }

  render() {
    let obj = <><Menu menuItem={this.state.menuItem} changeMenu={(item) => this.changeMenu(item)} value={this.state.value} setValue={(d) => this.setValue(d)} /></>
    if (!this.state.logged) {
      obj = <AppLogin userLogin={(telefono, password) => this.userLogin(telefono, password)} />
    }
    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}

export default App;