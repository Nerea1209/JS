import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import React, { useState } from 'react';

import Grafico from './Grafico';

export default function VentanaModal(props) {
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
                    <Grafico data={props.data} />
                    <span>{props.estadistica}</span>
                </ModalBody>
            </Modal>
        </div>
    );
}