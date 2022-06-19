import React, { useState } from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const NavDesplegable = ({ name, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavLink to='/' onClick={handleShow} className='my-auto'><img className='my-auto img3' src="https://i.ibb.co/pwhwHS4/Vector-1.png" alt="" /></NavLink>

            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h3 className='my-auto p-3'>J-Shop</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="mx-auto d-flex gap-4">
                        <Nav.Link className='fs-5 my-auto bg-dark' href="#Categories"><h4 className=' text-white ms-3 my-auto'>Categories</h4></Nav.Link>
                        <Nav.Link className='fs-5 my-auto bg-dark' href="#Detail"><h4 className=' text-white ms-3 my-auto'>About</h4></Nav.Link>
                        <Nav.Link className='fs-5 my-auto bg-dark' href="#fr3"><h4 className=' text-white ms-3 my-auto'>Shop</h4></Nav.Link>
                        <Nav.Link className='fs-5 my-auto bg-dark' href="#Footer"><h4 className=' text-white ms-3 my-auto'>Contact</h4></Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavDesplegable;