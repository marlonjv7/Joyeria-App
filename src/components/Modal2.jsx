import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const Modal2 = () => {
    const [smShow, setSmShow] = useState(false);

    return (
        <div>
            <img onClick={() => setSmShow(true)} className='my-auto img2 me-3' src="https://i.ibb.co/WpYFqQQ/shopping-cart-1.png" alt="" />

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                className='mt-0'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Carrito de Compras
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </div>
    )
}

export default Modal2;