import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Alert, Row, Col, Button, FormGroup,
  Modal, ModalHeader, ModalBody, Label, Input, ModalFooter
} from 'reactstrap';

const ModalDiccionario = (props) => {
  const { className } = props;
  const [seleccionado, setSeleccionado] = useState("Seleccione un medicamento");

  const handleChange = (event) => {
    const target = event.target;
    if (target.name === "filtro") {
      props.setFiltro(target.value);
    }
    if (target.name === "selectMulti") {
      setSeleccionado(target.value);
    }
  }

  const add = () => {
    setSeleccionado("Seleccione un medicamento");
    props.add(seleccionado)
  }

  return (
    <div>
      <Modal
        isOpen={props.mostrar}
        toggle={props.toggle}
        className={className}
      // onEntering={"Esto se ejecuta no sé cuando"}
      >
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2} > Filtrar: </Label>
            <Col sm={10}>
              <Input
                onChange={handleChange}
                id='filtro'
                name='filtro'
                type='text'
                value={props.buscador} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input onChange={handleChange} onClick={handleChange}
                id='selectMulti'
                name='selectMulti'
                type='select'
                defaultValue={"Seleccione un medicamento"} >
                <option disabled value='Seleccione un medicamento'>Seleccione un medicamento</option>
                {props.options.map((v, i) => <option key={i} value={v}>{v}</option>)}
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          {seleccionado}
          <Button color="primary" onClick={() => add()}>
            {props.aceptar}
          </Button>{' '}
          <Button color="secondary" onClick={props.toggle}>
            {props.cancelar}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}



class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      titulo: "Incluir X Medicamentos",
      incluidos: "",
      excluidos: "",
      buscador: "",
      options: ["CODIGO1|DESCRIPCION1", "CODIGO2|DESCRIPCION2", "CODIGO3|DESCRIPCION3", "CODIGO4|DESCRIPCION4"],
    }
  }

  setFiltro(value) {
    this.setState({ buscador: value });
  }

  toggleModal(titulo) {
    this.setState({ isOpen: !this.state.isOpen, titulo: titulo, buscador: "" })
  }

  add(datos) {
    // Aquí hace algo con los datos
    if (datos !== "Seleccione un medicamento") {
      let opciones = JSON.parse(JSON.stringify(this.state.options));
      if (this.state.titulo === "Incluir X Medicamentos") {
        let aux = JSON.parse(JSON.stringify(this.state.incluidos));
        if (aux === "")
          aux += datos;
        else
          aux += ",\n" + datos
        this.setState({ incluidos: aux, options: opciones.filter(v => v !== datos) });
      } else {
        let aux = JSON.parse(JSON.stringify(this.state.excluidos));
        if (aux === "")
          aux += datos;
        else
          aux += ",\n" + datos
        this.setState({ excluidos: aux, options: opciones.filter(v => v !== datos) });
      }
      this.toggleModal();
    }
  }

  clear(titulo) {
    let opciones = JSON.parse(JSON.stringify(this.state.options));
    if (titulo === "Incluir X Medicamentos") {
      let clear = JSON.parse(JSON.stringify(this.state.incluidos));
      if (clear !== "") {
        let aux = opciones.concat(clear.split(",\n")).sort();
        this.setState({ incluidos: "", options: aux })
      }
    } else {
      let clear = JSON.parse(JSON.stringify(this.state.excluidos));
      if (clear !== "") {
        let aux = opciones.concat(clear.split(",\n")).sort();
        this.setState({ excluidos: "", options: aux })
      }
    }
  }

  buscar = () => {
    let aux = JSON.parse(JSON.stringify(this.state.options));
    if (this.state.buscador !== "") {
      let regex = this.state.buscador.toLowerCase();
      return aux.filter(v => v.toLowerCase().match(regex) != '' && v.toLowerCase().match(regex) != null);
    } else {
      return aux;
    }
  }

  render() {
    return (
      <>
        <UncontrolledAccordion
          defaultOpen={
            [
              '1'
            ]}
          stayOpen
        >
          <AccordionItem>
            <AccordionHeader targetId="1">
              GESTIÓN DE FÁRMACOS
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Row>
                <Col>
                  <Alert color='info'>
                    Incluir X Medicamentos
                    <Input
                      type='textarea'
                      name='incluidos'
                      id='incluidos'
                      defaultValue={this.state.incluidos} />
                    <Button color='info' onClick={() => this.toggleModal("Incluir X Medicamentos")}>Add</Button>{" "}
                    <Button color='info' onClick={() => this.clear("Incluir X Medicamentos")}>Clear</Button>
                  </Alert>
                </Col>
                <Col>
                  <Alert color='danger'>
                    Excluir X Medicamentos
                    <Input
                      type='textarea'
                      name='excluidos'
                      id='excluidos'
                      defaultValue={this.state.excluidos} />
                    <Button color='danger' onClick={() => this.toggleModal("Excluir X Medicamentos")} >Add</Button>{" "}
                    <Button color='danger' onClick={() => this.clear("Excluir X Medicamentos")} >Clear</Button>
                  </Alert>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion >
        <br />
        <ModalDiccionario
          add={(datos) => this.add(datos)}
          mostrar={this.state.isOpen}
          toggle={() => this.toggleModal()}
          aceptar="Add"
          cancelar="Cancel"
          titulo={this.state.titulo}
          options={this.buscar()}
          setFiltro={(x) => this.setFiltro(x)}
          buscador={this.state.buscador} />
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Filter />
    </div>
  );
}

export default App;
