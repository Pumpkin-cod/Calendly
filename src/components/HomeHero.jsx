/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import imageSrc4 from "../Images/Pic-1.png"
import '../App.css'

 function HomeHero() {
    return (
        <div>
            <Container className="MTOP">
                <Row>
                    <Col md={5} className="hero">
                        <h1>
                            Easy <br />
                            scheduling <br />
                            <span>ahead</span>
                        </h1>
                        <p>
                            Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding
                            <br />
                            the perfect time — and so much more.
                        </p>
                        <Form className="d-flex" role="search">
                            <FormControl type="search" placeholder="Enter your email" aria-label="Search" className="me-2" />
                            <Button variant="outline-primary" type="submit" className="outline signup-button">
                                SignUp
                            </Button>

                        </Form>
                        <p>Create your free account. No credit card required.</p>
                    </Col>
                    <Col md={6}>
                        <img src={imageSrc4} alt="" className="img-fluid imageSrc4" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default HomeHero