import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Reviews />
        </div>
    );
};

export default Home;