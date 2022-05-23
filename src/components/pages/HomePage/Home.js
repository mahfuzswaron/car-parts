import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {
    const [products] = useProducts([]);

    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Reviews />
        </div>
    );
};

export default Home;