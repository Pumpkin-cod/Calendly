/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainFooter from './MainFooter';
import imageSrc from '../Images/Calendly_CTA_bg__1_.png';
import ebay from '../Images/ebay.png';
import imageSrc1 from '../Images/Pic-12.png';
import imageSrc2 from '../Images/Pic-13.png';
import imageSrc3 from '../Images/Pic-14.png';


 function Enterprise() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="use">
                            <h2 className="text-center"><span>Way more</span> than a <br />scheduling link</h2>
                            <p className="text-center">Standardize on the #1 scheduling platform and <br />deliver the power of Calendly across your entire <br />organization </p>
                            <button type="button" className="btn btn-primary btncen">Contact Sales</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="advert-2">
                <Row>
                    <Col md={12}>
                        <img src={imageSrc} alt="" className="img-fluid image-2" />
                        <h1 className="text-center text-2">Trusted by more than 50,000 of the<br />world's leading organizations</h1>
                        <div className="logos d-flex">
                            <img src={ebay} alt="eBay" />
                            <img src={ebay} alt="eBay" />
                            <img src={ebay} alt="eBay" />
                            <img src={ebay} alt="eBay" />
                            <img src={ebay} alt="eBay" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="invincible">
                <Row>
                    <Col md={2} className="smile1">
                        <p className="phead">Sales</p>
                        <img src={imageSrc1} alt="Sales" />
                        <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
                    </Col>
                    <Col md={2} offset-md={1} className="smile">
                        <p className="phead">Customer Success</p>
                        <img src={imageSrc2} alt="Customer Success" />
                        <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
                    </Col>
                    <Col md={2} offset-md={1} className="smile">
                        <p className="phead">Recruiting</p>
                        <img src={imageSrc3} alt="Recruiting" />
                        <p>Convert more leads and <br /> prospects into meetings <br /> and revenue. Easily book<br /> demos and Customer calls<br /> without the back and forth.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="but-2">
                            <button type="button" className="btn btn-dark btncen2">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <MainFooter />
        </div>
    );
}

export default Enterprise