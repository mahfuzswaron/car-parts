import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from './ProductCard';
import Loader from '../../shared/Loader';

const Products = () => {
    const [products] = useProducts([]);
    const [items, setItems] = useState(3)
    const slicedProducts = products.slice(0, items);
    if (!products || !products.length) return <Loader />
    return (
        <section>
            <div className='py-16 px-5 lg:px-20 bg-base-100'>
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
                    <button onClick={() => setItems(9)} className='btn btn-secondary w-3/12 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            }
        </section>
    );
};

export default Products;