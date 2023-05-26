/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

 function MainFooter() {
    return (
        <div>
            <footer className="buttomMag">
                <Container>
                    <Row>
                        <Col md={4} className="foot-item brnd">
                            <h3>Easy <br /><span>ahead</span></h3>
                            <p>We take the work out of connecting with others so you can accomplish more.</p>
                            <Nav>
                                <NavDropdown title="English" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">French</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Spanish</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Deutsche</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Portuguese</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Russia</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Hindi</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col md={2} className="foot-item">
                            <ul className="foot-nav">
                                <h5>About</h5>
                                <li><a href="/">About Calendly</a></li>
                                <li><a href="/">Our Developers</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">News Room</a></li>
                                <li><a href="/">Calendly Careers</a></li>
                            </ul>
                        </Col>
                        <Col md={2} className="foot-item">
                            <ul className="foot-nav">
                                <h5>Solutions</h5>
                                <li><a href="/">Sales</a></li>
                                <li><a href="/">Customer Success</a></li>
                                <li><a href="/">Education</a></li>
                                <li><a href="/">Recruiting</a></li>
                                <li><a href="/">Marketing</a></li>
                            </ul>
                        </Col>
                        <Col md={2} className="foot-item">
                            <ul className="foot-nav">
                                <h5>Features</h5>
                                <li><a href="/">Embed Calendly</a></li>
                                <li><a href="/">Availability</a></li>
                                <li><a href="/">Sending Notifications</a></li>
                                <li><a href="/">Calendly Mobile</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default MainFooter