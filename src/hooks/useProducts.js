import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://car-parts-server.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return [
        products,

    ]
};

export default useProducts;