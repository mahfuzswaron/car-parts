import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative flex items-center'>
            <img style={{ transform: 'scaleX(-1)' }}
                className='w-full mx-auto relative '
                src='https://i.ibb.co/BngB2v3/croped-banner-car.jpg' alt='' />

            <div className='z-1 absolute ml-5 lg:pl-20 text-secondary'>
                <h1 className='lg:text-7xl text-lg  font-semibold uppercase'>Welcome to <br></br><span className='lg:text-8xl text-xl text-primary lg:-ml-1'>CAR PARTS</span> </h1>
                <p className='lg:text-xl text-xs lg:my-3 my-1 font-p w-1/2'>
                    {
                        `Manufacturing car? Don't think about parts. 
                        You are in the Parts Universe.
                        `
                    }
                </p>
                <Link className='btn btn-secondary rounded-full lg:text-xl text-xs btn-sm lg:btn-lg lg:px-10 lg:my-3 my-1 border-none' to='/products'>BUY NOW</Link>
            </div>
        </div>
    );
};

export default Banner;