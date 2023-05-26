/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import imageSrc6 from '../Images/Pic-5.png';


 function IndividualBodyTwo() {
    return (
        <div>
            <Container fluid className="MTOP bg">
                <Row>
                    <Col md={5} className="hero-3">
                        <span className="sty-4">A CURATED CALENDAR <br /><br /></span>
                        <p className="sty-5">Book up efficiently</p>
                        <p className="sty-3">When invitees select a meeting slot from your schedule, they only see the times you’re available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.</p>
                        <Button variant="link" type="button">
                            Learn More
                        </Button>
                    </Col>
                    <Col md={5} className="hero-3-img">
                        <img src={imageSrc6} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="advert">
                <Row>
                    <Col md={12}>
                        <img src="images/Calendly_CTA_bg__1_.png" alt="" className="img-fluid image" />
                        <h1 className="text-center text">Find just-right plans for <br />individuals and small teams</h1>
                        <Button variant="primary" type="button">
                            See Our Plans
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default IndividualBodyTwo
