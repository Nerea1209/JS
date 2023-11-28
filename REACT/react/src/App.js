import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const FlashCard = (props) => {
  return (<>
      <Card style={{ width: "18rem" }} >
        <CardBody>
          <CardTitle tag="h5">{props.titulo}</CardTitle>
          <CardImg src={props.imagen} />
          <CardText>{props.texto}</CardText>
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
    this.setState({ imagen: param });
  }
  render() {
    return (
      <div className="App">
        <FlashCard
          imagen={this.state.imagen}
          titulo="Yes or Not"
          texto=":)"
        />
      </div>
    );
  }
}


export default App;