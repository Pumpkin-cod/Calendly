/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import imageSrc12 from '../Images/Pic-6.png';
import imageSrc13 from '../Images/Pic-7.png';
import '../App.css';


 function TeamHero() {
    return (
        <div>
            <Container className="MTOP">
                <Row>
                    <Col md={5} className="hero-2">
                        <h1><span>Power up </span>your<br /> teams</h1>
                        <p>Whether your team's performance is measured by<br /> sales revenue, recruiting pipeline, or customer<br /> retention, scheduling automation enables your<br /> team to hit goals faster.</p>
                        <div className="but d-flex">
                            <Button variant="outline-primary" type="button">Start For Free</Button>
                            <Button variant="light" type="button" className="but-mag buttonHero">Contact Sales</Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <img src={imageSrc12} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12} className="use">
                        <h3 className="text-center">Streamline tasks, extend <span>team</span> <br /> reach</h3>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex MTOP newjust">
                <Row>
                    <Col>
                        <div className="adimg">
                            <img src={imageSrc13} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
                <div className="ad great-day">
                    <p className="sty-1">SPEED OF CONNECTION</p>
                    <h5 className="sty">Outperform the competition <br /> with faster connections</h5>
                    <p className="sty-3">You can't waste time when prospects, clients, and<br /> candidates express interest. Avoid missed opportunities<br /> by automatically qualifying and routing website visitors<br /> to specific team members. You can also pool scheduling<br /> availability together to offer more options to connect.</p>
                </div>
            </Container>
        </div>
    );
}
export default TeamHero