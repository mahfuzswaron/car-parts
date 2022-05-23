import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../Products/ProductCard';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {
    const [products] = useProducts([]);
    const slicedProducts = products.slice(0, 3);

    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Reviews />
            <section className='mb-10'>
                <h3 className='text-4xl text-center text-primary font-semibold mb-10 mt-5'>Products</h3>
                <div className='flex justify-center mx-auto'>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            slicedProducts.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </section>
            <div className='flex justify-center mb-3'>
                <button className='btn btn-primary rounded-xl '>See all</button>
            </div>
        </div>
    );
};

export default Home;