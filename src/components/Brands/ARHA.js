import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import bangle1 from "../../assets/images/img/bangle1.png";
import product2 from "../../assets/images/img/product2.png";
import bangle4 from "../../assets/images/img/bangle4.png";
import bangle2 from "../../assets/images/img/bangle2.png";
import product1 from "../../assets/images/img/product1.png";
import ring1 from "../../assets/images/img/ring1.png";
import ring2 from "../../assets/images/img/ring2.png";
import ring3 from "../../assets/images/img/ring3.png";
import ring4 from "../../assets/images/img/ring4.png";
import chain1 from "../../assets/images/img/chain1.png";
import chain2 from "../../assets/images/img/chain2.png";
import { BASE_URL } from "../../Constant/Index";

function ARHA({ item }) {
  const { id, name } = useParams();
  console.log("name", item, name);
  const [brandcategories, setbrandcategories] = useState([]);

  useEffect(() => {
    categorys();
  }, []);

  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories/childes/${id}`)
      .then((response) => {
        console.log(response.data);
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("brandcategories", brandcategories);
  return (
    <>
      <Header />
      <div className="allPage-bg">
        <div className="section-padding">
          <div className="AllPage-area">
            <Container>
              <Row>
                <Col lg={7}>
                  <h2>NEW COLLECTION "{name}"</h2>
                  <Link to="">
                    <i className="fa fa-angle-double-right" /> Shop now
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <Container>
          {/* <Row >
                    {brandcategories.map(item => (
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={item.image} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>{item.name}</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        ))}
                       
                    </Row> */}

          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="bestseller">
                <h4 className="main-heading">{name} Category’s</h4>
              </div>
            </Col>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-4">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column brand-cate-list">
                  {brandcategories &&
                    brandcategories.map((item) => (
                      <Nav.Item key={item.id}>
                        <Nav.Link eventKey="first">{item.name}</Nav.Link>
                      </Nav.Item>
                    ))}

                  {/* <Nav.Item>
                    <Nav.Link eventKey="Bombay Fancy">Bombay Fancy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Turkish Fancy">Turkish Fancy</Nav.Link>
                  </Nav.Item> */}
                  {/* <Nav.Item>
                    <Nav.Link eventKey="Ladies bracelets">
                      Ladies bracelets
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Flexible bracelets">
                      Flexible bracelets
                    </Nav.Link>
                  </Nav.Item> */}
                  {/* <Nav.Item>
                    <Nav.Link eventKey="Calcutti bangles">
                      Calcutti bangles
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Bombay Fancy">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring3} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Turkish Fancy">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Ladies bracelets">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Flexible bracelets">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Calcutti bangles">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star" />
                          </a>
                          <a>
                            <i className="fa fa-star-o" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default ARHA;
