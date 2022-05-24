import React from 'react';
import EmailLogin from './EmailLogin';
import SocialLogIn from "./SocialLogIn";


const Login = () => {
    return (
        <section className='grid grid-cols-1 justify-items-center w-2/3 mx-auto my-10 gap-5'>
            <div className='w-2/3'>
                <EmailLogin />
            </div>
            <div className='flex '>
                <div>
                    <hr className='border-2'></hr>
                </div>
                OR
                <div>
                    <hr></hr>

                </div>
            </div>
            <div>
                <SocialLogIn />
            </div>
        </section>
    );
};

export default Login;