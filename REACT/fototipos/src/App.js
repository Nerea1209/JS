import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
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
} from 'reactstrap';
import "./App.css"
import DATOS from "./datos.js"
import IMAGES from "./images.js"


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
        size='sm'
      >
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.body}
          {props.estadistica}
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
      error2: "",
      estadistica: "",
      resultados: "",
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
  getvoto(int) {
    let resultado = 0;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resultado = this.responseText;
        console.log(resultado.slice(1, -1).split(",")[int])
      }
    }
    xmlhttp.open("GET", "http://localhost/Proyectos/fototipos/fototipos.php?voto=" + int, true);
    xmlhttp.send();
    setTimeout(console.log("<span>El " + resultado.slice(1, -1).split(",")[int] + "</span>"), 200)
    this.setState({ estadistica: "<span>El " + resultado.slice(1, -1).split(",")[int] + "</span>" })
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
    if (this.state.p[id.substring(1, 2) - 1] !== "") return "Seleccionado";
    else return "*";
  }

  onClick = () => {
    if (this.state.p[0] !== "" && this.state.p[1] !== "" && this.state.p[2] !== "" &&
      this.state.p[3] !== "" && this.state.p[4] !== "" && this.state.p[5] !== "" && this.state.p[6] !== "") {
      this.setState({ mostrar: true });
      this.calcular();
      this.setState({ error2: "" })
    } else {
      this.setState({ error2: "Responda a todas las preguntas" })
    }
  }

  calcular = () => {
    let suma = 0;
    DATOS.preguntas.forEach((v, i) => suma += v.respuestas[this.state.p[i]].valor);
    DATOS.resultados.forEach((v, i) => {
      if (suma >= v.min && suma <= v.max) {
        this.getvoto(v.tipo)
        // {this.state.resultados[v.tipo]}
        this.setState({ title: "Tipo de piel " + v.tipo, body: <><span>Su puntuación ha sido {suma} puntos.</span><img src={IMAGES.fototipos[v.tipo]} alt={"Fototipo " + v.tipo} />{v.body + this.state.estadistica}</> });
      }
    })
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
                            checked={this.state.p[i] === j.toString()}
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
                            checked={this.state.p[i] === j.toString()}
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
            <span style={{ color: "red" }}>{this.state.error2}<Button
              color="primary"
              id='boton'
              onClick={() => this.onClick()}
            >
              Obtener resultados
            </Button></span>
            <Example mostrar={this.state.mostrar} title={this.state.title} body={this.state.body} estadistica={this.state.estadistica} toggle={() => this.toggleModal()} />
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
