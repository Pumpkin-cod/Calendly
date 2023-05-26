/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import '../App.css';
import Logo from "../Images/Logo.png";

function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto addMag">
                            <Nav.Link href="individual">Individuals</Nav.Link>
                            <Nav.Link href="team">Teams</Nav.Link>
                            <Nav.Link href="enterprise">Enterprise</Nav.Link>
                        </Nav>
                        <NavDropdown title="English" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">French</NavDropdown.Item>
                            <NavDropdown.Item href="/">Spanish</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Deutsch</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    );
}

export default NavBar