import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const id = useParams().id;
    const url = `http://localhost:5000/parts/${id}`;
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product, url])
    return (
        <div>
            <h1>Purchase {product?.name}</h1>
        </div>
    );
};

export default Purchase;