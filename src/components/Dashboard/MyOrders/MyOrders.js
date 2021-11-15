import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <div className="container my-5" style={{ minHeight: "200px" }}>
            <h1 className="pink-text">My All Ordered Lipsticks</h1>
            {myOrders.length}
            <Row xs={1} md={3} className=" my-3">
                {myOrders.map(order => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={order?.img} height="200px" />
                            <Card.Body>
                                <Card.Title className="fs-6 pink-text">{order?.productName}</Card.Title>
                                <Card.Text>
                                    <h5 className="pink-text">Price: $ {order?.price}</h5>
                                    <h6 className="pink-text">Status: {order?.status}</h6>
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