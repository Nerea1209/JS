import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function Mapa(props) {
  return (
    <Container>
      <Row>
        {props.poblacion.map((v, i) => {
          if (i % 9 === 0 && i !== 0) {
            return (<>
              <Col key={"a" + i} xs="3" style={{ visibility: "hidden" }}></Col>
              <Col key={i} xs="1"><Button color='success' onClick={(e) => props.onClick(e)}>{v}</Button></Col>
            </>)

          } else {
            return (
              <Col key={i} xs="1"><Button color='success'>{v}</Button></Col>
            )
          }
        })}
      </Row>
    </Container>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [0, 5, 4, 2, 9, 8, 0, 8, 8,
        1, 7, 21, 23, 44, 5, 3, 4, 0,
        2, 6, 32, 22, 33, 8, 4, 2, 8,
        1, 2, 43, 4, 56, 65, 34, 11, 8,
        2, 22, 32, 3, 42, 62, 43, 21, 0,
        2, 2, 23, 34, 64, 24, 42, 15, 7,
        0, 2, 36, 43, 61, 26, 64, 12, 0,
        1, 2, 15, 43, 34, 2, 12, 2, 3,
        1, 0, 12, 3, 0, 0, 21, 2, 2],
    };
  }
  onClick(boton) {
    console.log(boton)
    // if (boton.color == "success") {

    // }
  }
  render() {
    return (
      <div className="App" >
        <h1>Supermarkets</h1>
        <Mapa poblacion={this.state.poblacion} onClick={(boton) => this.onClick(boton)} />
        <br />
        <p><strong>Población total: </strong> {this.state.poblacion.reduce((suma, v) => suma + v, 0)} personas.</p>
      </div>
    );
  }
}

export default App;
