import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import product5 from '../../assets/images/img/product5.png'
import product3 from '../../assets/images/img/product3.png'

function Necklaces() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>NEW COLLECTION “necklaces”</h2>
                                    <Link to=''>Shop now</Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <section className='section-padding'>
                <Container>
                    <Row >
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product5} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product5} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product5} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <Footer />
        </>
    )
}

export default Necklaces