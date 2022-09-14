import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const useProducts = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-parts-server.herokuapp.com/parts')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [products])
    const fetchProducts = async () => {
        const res = await fetch('https://car-parts-server.herokuapp.com/parts');
        return res.json();
    };

    const { status, data } = useQuery("products", fetchProducts)

    return [
        data,
        status
    ]
};

export default useProducts;