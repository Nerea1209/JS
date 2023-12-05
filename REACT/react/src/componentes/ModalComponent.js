import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

function Ventana(props) {
    const { className } = props;

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Modal
                isOpen={modal}
                modalTransition={{ timeout: 300 }}
                backdropTransition={{ timeout: 300 }}
                toggle={toggle}
                centered={true}
                className={className}
            >
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                    ¿Quieres volver a jugar?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.onClickSi()}>
                        Sí
                    </Button>{' '}
                    <Button color="secondary" onClick={() => props.onClickNo()}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

Ventana.propTypes = {
    className: PropTypes.string,
};

export default Ventana;