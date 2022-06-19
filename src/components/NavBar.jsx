import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Shop from '../containers/Shop';
import { DIV } from '../styles/StyleGlobal';
import Modal2 from './Modal2';
import NavDesplegable from './NavDesplegable';

const NavBar = () => {

  return (
    <Navbar className='mt-4'>
      <Container>
        <Navbar.Brand className='fs-3 ms-0'>J-Shop</Navbar.Brand>
        <Nav className="mx-auto d-flex gap-4">
          <Nav.Link className='fs-5 my-auto' href="#Categories">Categories</Nav.Link>
          <Nav.Link className='fs-5 my-auto' href="#Detail">About</Nav.Link>
          <Nav.Link className='fs-5 my-auto' href="#"><Shop /></Nav.Link>
          <Nav.Link className='fs-5 my-auto' href="#Footer">Contact</Nav.Link>
        </Nav>
        <DIV className='d-flex'>
          <Nav.Link href='#Search'><img className='my-auto img1' src="https://i.ibb.co/dtL180W/search-2.png" alt="" /></Nav.Link>
          <Nav.Link href='#Modal2'><Modal2 /></Nav.Link>
          {
            ['end'].map((placement, idx) => (
              <NavDesplegable key={idx} placement={placement} name={placement} />
            ))
          }
        </DIV>
      </Container>
    </Navbar>
  )
}

export default NavBar;