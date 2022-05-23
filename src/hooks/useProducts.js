import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return [
        products,

    ]
};

export default useProducts;