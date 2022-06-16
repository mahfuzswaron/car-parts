import React from 'react';
import EmailLogin from './EmailLogin';
import SocialLogIn from "./SocialLogIn";


const Login = () => {

    return (
        <section className='grid grid-cols-1 justify-items-center w-full lg:w-2/3 mx-auto my-10 gap-5'>
            <div className='w-full'>
                <EmailLogin />
            </div>
            <div className='flex '>
                <p className='font-p uppercase text-lg'>or</p>
            </div>
            <div>
                <SocialLogIn />
            </div>
        </section>
    );
};

export default Login;