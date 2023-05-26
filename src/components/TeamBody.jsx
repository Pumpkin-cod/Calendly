/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imageSrc8 from '../Images/Pic-8.jpg';
import imageSrc9 from '../Images/Pic-9.jpg';
import imageSrc10 from '../Images/Pic-10.jpg';
import imageSrc11 from '../Images/Pic-11.jpg';


function TeamBody() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="allgood">
                        <p className="text-center give">SOLUTIONS</p>
                        <h4 className="text-center">The right Calendly for the work you do</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <img src={imageSrc8} alt="" className="img-fluid addright" />
                        <h4 className="dabest">Sales</h4>
                        <p>Get to your best leads faster</p>
                        <a href="/">Learn More</a>
                    </Col>
                    <Col md={3}>
                        <img src={imageSrc9} alt="" className="img-fluid addright" />
                        <h4 className="dabest">Recruiting</h4>
                        <p>Get to your best leads faster</p>
                        <a href="/">Learn More</a>
                    </Col>
                    <Col md={3}>
                        <img src={imageSrc10} alt="" className="img-fluid addright" />
                        <h4 className="dabest">Customer Success</h4>
                        <p>Get to your best leads faster</p>
                        <a href="/">Learn More</a>
                    </Col>
                    <Col md={3}>
                        <img src={imageSrc11} alt="" className="img-fluid addright" />
                        <h4 className="dabest">Education</h4>
                        <p>Get to your best leads faster</p>
                        <a href="/">Learn More</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TeamBody
