import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const MyOrders = () => {
    return (
        <div className="container my-5" style={{ minHeight: "200px" }}>
            <h1 className="pink-text">My All Ordered Lipsticks</h1>

            <Row xs={1} md={4} className="g-5 my-3">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Product Name</Card.Title>
                                <Card.Text>
                                    <h5>Description</h5>
                                    <h4>$100</h4>
                                    <button className="btn btn-danger">Cancel</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;