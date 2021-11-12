import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pd1 from '../../images/Products/product-1.jpg'

const Products = () => {
    return (
        <div className="py-5 text-center bg-light">
            <h1 className="text-uppercase"><span className="pink-text">Lipsticks</span> We Provide</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto my-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50 mx-auto pt-3" src={pd1} />
                        <Card.Body className="text-center">
                            <Card.Title>name</Card.Title>
                            <Card.Text>
                                description
                            </Card.Text>
                        </Card.Body>
                        <Link to="" className="mx-auto mb-3">
                            <button className="pink-btn">
                                Details
                            </button>
                        </Link>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Products;