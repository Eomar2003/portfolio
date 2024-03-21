import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navs.css';

const Navs = () => {
    return (

        

        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home" className='logo'>Taste it</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>About Us</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>Explore Foods</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>Reviews</Nav.Link>
                        <Nav.Link href="#link" className=''>FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}



export default Navs;