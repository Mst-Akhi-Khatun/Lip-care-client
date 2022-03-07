import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
import blog1 from '../../images/Blogs/blog-1.jpg'
import blog2 from '../../images/Blogs/blog-2.jpg'
import blog3 from '../../images/Blogs/blog-3.jpg'

const Blog = () => {
    return (
        <div className="container text-center text-uppercase" id="blog">
            <h1 className="fw-bold">Our <span className="purple-text">Blogs</span> </h1>
            <Row xs={1} md={3} className="my-3">
                <Zoom>
                    <Col>
                        <Card className="border-0 py-3 ">
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body className="banner-bg">
                                <Card.Text>
                                    <h6 className="text-secondary"><i className="far fa-clock"></i> 15 September, 2020 <span><i className="fas fa-comments ms-2"></i> Comments(1)</span></h6>
                                </Card.Text>
                                <Card.Title>
                                    Excepteur Occaecat Cupidatat
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 py-3">
                            <Card.Img variant="top" src={blog2} />
                            <Card.Body className="banner-bg">
                                <Card.Text>
                                    <h6 className="text-secondary"><i className="far fa-clock"></i> 25 October, 2021 <span><i className="fas fa-comments ms-2"></i> Comments(3)</span></h6>
                                </Card.Text>
                                <Card.Title >
                                    Blend into the nature
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 py-3">
                            <Card.Img variant="top" src={blog3} />
                            <Card.Body className="banner-bg">
                                <Card.Text>
                                    <h6 className="text-secondary"><i className="far fa-clock"></i> 10 August, 2021 <span><i className="fas fa-comments ms-2"></i> Comments(5)</span></h6>
                                </Card.Text>
                                <Card.Title>
                                    Crowdes Passges All The Way
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Zoom>

            </Row>
        </div>
    );
};

export default Blog;