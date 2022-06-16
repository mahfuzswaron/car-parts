import React from 'react';

const Success = ({ children }) => {
    return (
        <div className='font-p w-full h-full p-20 flex justify-center  items-center'>
            <p className='text-success text-3xl text-center'>{children}</p>
        </div>
    );
};

export default Success;