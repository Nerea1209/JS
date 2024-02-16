import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import React from 'react';
import DATOS from "../datos.js"
import IMAGES from "../images.js"
import axios from 'axios';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Input,
    Form,
    Button,
} from 'reactstrap';
import VentanaModal from './VentanaModal.js';

export default class Opciones extends React.Component {
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
    async getvoto(int) {
        try {
            const response = await axios.post('https://thematic-learning.com/2DAW2024/NEREA/fototipos.php?voto=' + int);
            let suma = 0;
            response.data.forEach((v, i) => suma += parseInt(v));
            console.log(suma)
            this.setState({ estadistica: "El " + (100 * (response.data[int - 1] / suma)).toFixed(2) + "% de las personas que han respondido este test tienen su mismo fototipo de piel.", resultados: response.data });
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
                this.setState({ title: "Tipo de piel " + v.tipo, body: <><div id='resultados'>Su puntuación ha sido <strong>{suma} puntos</strong> .<br />{v.body}</div><img src={IMAGES.fototipos[v.tipo]} alt={"Fototipo " + v.tipo} /></> });
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
                        <VentanaModal mostrar={this.state.mostrar} title={this.state.title} body={this.state.body} toggle={() => this.toggleModal()} estadistica={this.state.estadistica} data={this.state.resultados} />
                    </Form>
                </Accordion>
            </div >
        )
    };
}