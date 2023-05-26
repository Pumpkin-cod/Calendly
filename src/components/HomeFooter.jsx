/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import ebay from '../Images/ebay.png';

function HomeFooter() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="use">
                        <h3 className="text-center"> Simplified scheduling for more than <span>10,000,000</span> users <br /> worldwide </h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} className="d-flex offset-md-1">
                        <Image src={ebay} alt="" />
                        <Image src={ebay} alt="" />
                        <Image src={ebay} alt="" />
                        <Image src={ebay} alt="" />
                        <Image src={ebay} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container className="addnew">
                <Row>
                    <Col md={10} className="d-flex offset-md-1 MGRight">
                        <div>
                            <Badge variant="primary" className="text-bg-primary">1</Badge>
                            <h5>Create <br />Simple Rules</h5>
                            <p>Let Calendly know your <br /> availability preferences and <br /> it'll do the work for you</p>
                        </div>
                        <div>
                            <Badge variant="primary" className="text-bg-primary">2</Badge>
                            <h5>Share <br />Your Link</h5>
                            <p>Send guests your Calendly <br />link or embed it on your <br />website</p>
                        </div>
                        <div>
                            <Badge variant="primary" className="text-bg-primary">3</Badge>
                            <h5>Get Booked</h5>
                            <p>They pick a time and the <br />event is added to your <br />Calendly</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default HomeFooter