import { Modal, Nav } from 'react-bootstrap';
import React, { useState } from 'react'

const Shop = () => {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div>
            {
                values.map((v, idx) => (
                    <Nav.Link key={idx} className="me-2 mb-2 text-dark fs-5" onClick={() => handleShow(v)}>
                        Shop
                        {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Nav.Link>
                ))
            }
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header className='w-75 mx-auto my-5' closeButton>
                    <Modal.Title >Shop</Modal.Title>
                </Modal.Header>
                <Modal.Body className='w-75 mx-auto mt-5'>...</Modal.Body>
            </Modal>
        </div>
    )
}

export default Shop;