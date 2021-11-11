import React from 'react';
import { Card, Button } from 'react-bootstrap';
import pd1 from '../../images/Products/product-1.jpg'

const Products = () => {
    return (
        <div className="py-5 text-center">
            <h1 className="text-uppercase">Our<span className="text-warning"> Products</span></h1>
            <p>THE BEST RECOMMENDATION</p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pd1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;