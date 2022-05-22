import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative flex items-center'>
            <img style={{ transform: 'scaleX(-1)' }}
                className='w-full mx-auto relative '
                src='https://i.ibb.co/BngB2v3/croped-banner-car.jpg' alt='' />

            <div className='z-1 absolute ml-5'>
                <h1 className='text-7xl text-white font-semibold'>Welcome to <br></br><span className='text-8xl text-primary '>CAR PARTS</span> </h1>
                <p className='text-xl text-white my-3'>
                    Get All the things you need here.
                </p>
                <Link className='btn hover:btn-primary rounded-lg text-black bg-white p-3 my-3 border-none' to='/products'>BUY NOW</Link>
            </div>
        </div>
    );
};

export default Banner;