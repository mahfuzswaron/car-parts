import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products] = useProducts([]);
    const [items, setItems] = useState(3)
    const slicedProducts = products.slice(0, items);
    return (
        <section>
            <div className='py-10 my-5 px-5 lg:px-20 '>
                <h3 className='text-3xl lg:text-4xl uppercase text-center text-neutral hover:text-primary font-semibold mb-16 '>Products</h3>
                <div className='flex justify-center mx-auto'>
                    <div
                        className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
                        {
                            slicedProducts.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
            {
                items === 3 &&
                <div className='flex justify-center mb-3'>
                    <button onClick={() => setItems(9)} className='btn btn-primary rounded-xl'>See all</button>
                </div>
            }
        </section>
    );
};

export default Products;