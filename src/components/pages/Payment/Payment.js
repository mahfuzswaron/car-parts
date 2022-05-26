import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const id = useParams().id
    return (
        <div>
            <h1>Pay for product {id}</h1>
        </div>
    );
};

export default Payment;