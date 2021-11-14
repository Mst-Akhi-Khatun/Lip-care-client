import React from 'react';
import { useParams } from 'react-router';

const OrderForm = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>Order now</h2>
        </div>
    );
};

export default OrderForm;