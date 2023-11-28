import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardImg, Card, CardBody, CardTitle } from 'reactstrap';

const Sino = (props) => {
  return (<>
    <Card
      style={{width: "18rem"}}
    >
      <CardImg src={props.imagen} />
      <CardBody>
        <CardTitle tag="h5">
          {props.titulo}
        </CardTitle>
        <Button color="success" onClick={() => props.onClick(props.imagenSi)}>
          {props.textoBotonSi}
        </Button>
        {" "}
        <Button color="danger" onClick={() => props.onClick(props.imagenNo)}>
          {props.textoBotonNo}
        </Button>
      </CardBody>
    </Card>
  </>)
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: "/assets/images/yes.png",
    }
  }
  cambiar(param) {
    this.setState({imagen: param});
  }
  render() {
    return (
      <div className="App">
        <Sino
          imagen={this.state.imagen}
          imagenSi = "/assets/images/yes.png"
          imagenNo ="/assets/images/no.png"
          titulo="Yes or Not"
          textoBotonSi="Oh yes!"
          textoBotonNo="Oh no!"
          onClick={(x) => this.cambiar(x)}
        />
      </div>
    );
  }
}


export default App;