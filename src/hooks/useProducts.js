import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [
        products,

    ]
};

export default useProducts;