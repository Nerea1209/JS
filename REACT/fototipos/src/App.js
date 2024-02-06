import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Input,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import "./App.css"
import DATOS from "./datos.js"


const VentanaModal = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} >
        <ModalHeader id='header' toggle={props.toggle}><span>Tipo de piel I</span><Button id='x' outline onClick={props.toggle}>x</Button></ModalHeader>
        <ModalBody>
          Su tipo de piel es muy sensible a la luz solar.
        </ModalBody>
        <ModalFooter>
          <span style={{ color: "red" }}>{props.error}</span><Button color="primary" onClick={() => props.add(props.nombre, props.telefono)}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>

  );
}

function Example(props) {
  const { className } = props;
  const [modal, setModal] = useState(props.mostrar);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => props.toggle();
  return (
    <div>
      <Modal
        isOpen={props.mostrar}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
        centered={true}
      >
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.body}
        </ModalBody>
      </Modal>
    </div>
  );
}


class Opciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "",
      p: ["", "", "", "", "", "", ""],
      mostrar: false,
      title: "",
      body: "",
      error: "*",
    }
  }
  toggle = (id) => {
    if (this.state.open === id) {
      this.setState({ open: "" });
    } else {
      this.setState({ open: id });
    }
  };
  toggleModal() {
    this.setState({ mostrar: !this.state.mostrar, p: ["", "", "", "", "", "", ""], open: "" })
  }
  handelChange = (event) => {
    const target = event.target;
    let aux = this.state.p.slice();
    if (target.name === "p1") {
      aux[0] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p2") {
      aux[1] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p3") {
      aux[2] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p4") {
      aux[3] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p5") {
      aux[4] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p6") {
      aux[5] = target.value;
      this.setState({ p: aux });
    }
    if (target.name === "p7") {
      aux[6] = target.value;
      this.setState({ p: aux });
    }
  }

  seleccionado = (id) => {
    switch (id) {
      case 'p1':
        if (this.state.p[0] !== "") return "Seleccionado";
        else return "*"
      case 'p2':
        if (this.state.p[1] !== "") return "Seleccionado";
        else return "*"
      case 'p3':
        if (this.state.p[2] !== "") return "Seleccionado";
        else return "*"
      case 'p4':
        if (this.state.p[3] !== "") return "Seleccionado";
        else return "*"
      case 'p5':
        if (this.state.p[4] !== "") return "Seleccionado";
        else return "*"
      case 'p6':
        if (this.state.p[5] !== "") return "Seleccionado";
        else return "*"
      case 'p7':
        if (this.state.p[6] !== "") return "Seleccionado";
        else return "*"
      default:
        return "";
    }
  }

  onClick = () => {
    if (this.state.p[0] !== "" && this.state.p[1] !== "" && this.state.p[2] !== "" &&
      this.state.p[3] !== "" && this.state.p[4] !== "" && this.state.p[5] !== "" && this.state.p[6] !== "") {
      this.setState({ mostrar: true });
      console.log(this.state.mostrar)
      this.calcular();
    }
  }

  calcular = () => {
    let suma = 0;
    DATOS.preguntas.forEach((v, i) => suma += v.respuestas[this.state.p[i]].valor);
    if (suma >= 0 && suma <= 7) {
      this.setState({ title: "Tipo de piel I", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" /><span>Su piel es muy sensible a la luz solar</span></> });
    } else if (suma >= 8 && suma <= 21) {
      this.setState({ title: "Tipo de piel II", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" />Su piel es sensible a la luz solar</> });
    } else if (suma >= 22 && suma <= 42) {
      this.setState({ title: "Tipo de piel III", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" />Su piel tiene sensibilidad normal a la luz solar</> });
    } else if (suma >= 43 && suma <= 68) {
      this.setState({ title: "Tipo de piel IV", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" />Su piel tiene tolerancia a la luz solar</> });
    } else if (suma >= 69 && suma <= 84) {
      this.setState({ title: "Tipo de piel V", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" />Su piel es oscura y tiene alta tolerancia a la luz solar.</> });
    } else {
      this.setState({ title: "Tipo de piel VI", body: <><span>Su puntuación ha sido {suma}</span><img src="" alt="" />Su piel es negra y tiene altísima tolerancia a la luz solar.</> });
    }
  }
  render() {
    return (
      <div>
        <Accordion flush open={this.state.open} toggle={this.toggle}>
          <Form>
            {DATOS.preguntas.map((p, i) =>
              <AccordionItem key={i}>
                <AccordionHeader targetId={"" + i}>{p.enunciado} &nbsp; <span style={{ color: 'gray' }}>{this.seleccionado(p.id)}</span></AccordionHeader>
                <AccordionBody accordionId={"" + i}>
                  <section id={p.id}>
                    {p.respuestas.map((r, j) => {
                      if (r.src) {
                        return <article key={i + "" + j}>
                          <Input
                            type="radio"
                            name={r.name}
                            value={j}
                            id={r.id}
                            onChange={this.handelChange}
                          />
                          <label for={r.id}>
                            <img src={r.src} alt={r.alt} />
                            {r.texto}
                          </label>
                        </article>
                      } else {
                        return <article key={i + "" + j}>
                          <Input
                            type="radio"
                            name={r.name}
                            value={j}
                            id={r.id}
                            onChange={this.handelChange}
                          />
                          <label for={r.id}>
                            {r.texto}
                          </label>
                        </article>
                      }
                    })}
                  </section>
                </AccordionBody>
              </AccordionItem>
            )}
            <Button
              color="primary"
              id='boton'
              onClick={() => this.onClick()}
            >
              Obtener resultados
            </Button>
            <Example mostrar={this.state.mostrar} title={this.state.title} body={this.state.body} toggle={() => this.toggleModal()} />
          </Form>
        </Accordion>
      </div >
    )
  };
}

function App() {
  return (
    <div className="App">
      <h1>Descubre cuál es su fototipo</h1>
      <Opciones />
    </div>
  );
}

export default App;
