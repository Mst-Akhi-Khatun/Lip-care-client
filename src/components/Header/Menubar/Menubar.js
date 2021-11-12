import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo-2.png'

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="light-pink-bg px-5">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="40"

                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">LIP CARE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/login">Login</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/register">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;