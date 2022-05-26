import React from 'react';

const Success = ({ children }) => {
    return (
        <div>
            <div className='w-full h-full flex justify-center  items-center'>
                <p className='text-success text-3xl text-center'>{children}</p>
            </div>
        </div>
    );
};

export default Success;