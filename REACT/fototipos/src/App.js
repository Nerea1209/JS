import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
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
  Collapse,
  Card,
  CardBody
} from 'reactstrap';
import "./App.css"
import DATOS from "./datos.js"
import IMAGES from "./images.js"
import axios from 'axios';


function Grafico(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Función para realizar la solicitud GET
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost/Proyectos/fototipos/fototipos2.php');
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Llamada a la función para realizar la solicitud cuando el componente se monta
    fetchData();
  }, []);

  const option = {
    title: {
      text: 'Resultados de los fototipos de IES Mar de Alborán',
      textAlign: "center",
      left: '50%',
    },
    tooltip: {},
    xAxis: {
      data: ['Fototipo I', 'Fototipo II', 'Fototipo III', 'Fototipo IV', 'Fototipo V', 'Fototipo VI']
    },
    yAxis: {},
    series: [
      {
        name: 'Respuestas',
        type: 'bar',
        data: data,
        itemStyle: {
          normal: {
            color: function (params) {
              const colorList = ['#F2E7D2', '#F79EB1', '#D97C90', '#AE8FBA', '#4C5E91', '#473469'];
              return colorList[params.dataIndex];
            }
          }
        }
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '400px', width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
    />
  );

}


function VentanaModal(props) {
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
        fullscreen={true}
      >
        <ModalHeader toggle={toggle}>Resultados del test</ModalHeader>
        <ModalBody>
          <h2>{props.title}</h2>
          {props.body}
          <Grafico />
          <span>{props.estadistica}</span>
        </ModalBody>
      </Modal>
    </div>
  );
}

class Opciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "0",
      p: ["", "", "", "", "", "", ""],
      mostrar: false,
      title: "",
      body: "",
      error: "*",
      error2: "",
      estadistica: "",
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
  async getvoto(int) {
    try {
      const response = await axios.post('http://localhost/Proyectos/fototipos/fototipos.php?voto=' + int);
      this.setState({ estadistica: "El " + response.data + "% de las personas que han respondido este test tienen su mismo fototipo de piel." });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handelChange = (event) => {
    let aux = this.state.p.slice();
    DATOS.preguntas.forEach((v, i) => {
      if (event.target.name === v.id) {
        aux[i] = event.target.value;
      }
    })
    this.setState({ p: aux });
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
        this.setState({ title: "Tipo de piel " + v.tipo, body: <><div id='resultados'>Su puntuación ha sido <strong>{suma}puntos</strong> .<br />{v.body}</div><img src={IMAGES.fototipos[v.tipo]} alt={"Fototipo " + v.tipo} /></> });
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
                          <label htmlFor={r.id}>
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
                          <label htmlFor={r.id}>
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
            <VentanaModal mostrar={this.state.mostrar} title={this.state.title} body={this.state.body} toggle={() => this.toggleModal()} estadistica={this.state.estadistica} />
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
      <section className='contenido'>
        <h2>¿Qué es el fototipo?</h2>
        El fototipo se refiere a la <strong>clasificación</strong> de la respuesta de la piel a la
        exposición solar. Fue desarrollado por el dermatólogo <strong>Thomas B. Fitzpatrick </strong>
        en la década de 1970. El sistema de clasificación de Fitzpatrick tiene en cuenta
        la capacidad de la piel para <strong>broncearse</strong> y su propensión a <strong>quemarse</strong> cuando se
        expone al sol.
      </section>
      <section className='contenido'>
        <h2>Tipos de fototipos</h2>
        <ol>
          <li><strong> Tipo I:</strong>  Piel muy clara, cabello rubio o pelirrojo, ojos claros. Quema fácilmente y raramente se broncea.</li>
          <li><strong> Tipo II:</strong>  Piel clara, cabello rubio o castaño claro, ojos claros. Quema con facilidad y se broncea con dificultad.</li>
          <li><strong> Tipo III:</strong>  Piel clara a intermedia, cabello castaño, ojos de color variable. Quema moderadamente y se broncea gradualmente.</li>
          <li><strong> Tipo IV:</strong>  Piel intermedia, cabello oscuro, ojos de color variable. Quema con dificultad y se broncea con facilidad.</li>
          <li><strong> Tipo V:</strong>  Piel oscura, cabello oscuro, ojos oscuros. Raramente quema y se broncea fácilmente.</li>
          <li><strong> Tipo VI:</strong>  Piel muy oscura, cabello oscuro, ojos oscuros. No suele quemarse y tiene una gran capacidad para broncearse.</li>
        </ol>
      </section>
      <h2 id='test'>Test</h2>
      <Opciones />
    </div >
  );
}

export default App;
