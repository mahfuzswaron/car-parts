import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {

    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Reviews />
            <Products />
        </div>
    );
};

export default Home;