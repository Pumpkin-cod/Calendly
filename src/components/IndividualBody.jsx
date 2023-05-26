/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import imageSrc5 from '../Images/Pic-4.png';

 function IndividualBody() {
    return (
        <div>
            <Container className="d-flex MTOP newjust">
                <Row>
                    <Col>
                        <div className="adimg">
                            <img src={imageSrc5} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <div className="ad">
                    <p className="sty-1">The Calendly Booking Link</p>
                    <h5 className="sty">Save time with your own <br /> personalized booking links</h5>
                    <p className="sty-3">Time is a precious commodity. Calendly is the courteous<br /> way to book meetings and other appointments, because<br /> scheduling with just a few clicks makes the <br /> most of everyone’s time.</p>
                    <Button variant="dark" type="button" className='buttonHero'>
                        Share Your Link
                    </Button>
                </div>
            </Container>
        </div>
    );
}
export default IndividualBody