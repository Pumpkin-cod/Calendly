/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import imageSrc7 from '../Images/Pic-2.png';
import '../App.css';

 function IndividualHero() {
    return (
        <div>
            <Container className="MTOP">
                <Row>
                    <Col md={5} className="hero-2">
                        <h1>
                            The genius way <br />
                            to work <span>better</span>
                        </h1>
                        <p>
                            Calendly makes it easy to work smarter when <br />
                            you're working solo. Meetings, sessions, and <br />
                            appointments become more efficient ways to <br />
                            achieve success and accomplish goals.
                        </p>
                        <Button variant="dark" type="button" className='buttonHero'>
                            Sign Up For Free
                        </Button>
                    </Col>
                    <Col md={5}>
                        <img src={imageSrc7} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default IndividualHero