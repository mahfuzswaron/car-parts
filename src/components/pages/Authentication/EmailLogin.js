import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const EmailLogin = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {

        await signInWithEmailAndPassword(data.email, data.password)
        navigate(from, { replace: true });
    };
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    // if (error) {
    //     return (
    //         <div>
    //             <p>Error: {error.message}</p>
    //         </div>
    //     );
    // }
    if (loading) {
        return <p>Loading...</p>;
    }




    return (
        <form className='shadow-md p-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-4xl text-primary text-center font-semibold mb-5'>Please Log in</h3>
            <input type='email' placeholder='Email Adress' className='input input-bordered w-full ' {...register("email", {
                required: true
            })} />
            <p className='text-error'>{errors?.email.type === "required" && `Email is required`}</p>
            <input type='password' placeholder='Password' className='input input-bordered w-full' {...register("password", {
                required: true,
                minLength: 6,
            })} />
            <p className='text-error'>{errors?.password.type === 'required' && `Password is required`}</p>
            <p className='text-error'>{errors?.password.type === 'minLength' && `minimum 6 characters`}</p>
            {
                error && <p className='text-error'> {error.message}</p>
            }
            <input className='btn btn-primary' value='Log in' type="submit" />
            <p>New to Car Parts? <Link to='/registar' className='underline'>Registar here</Link></p>
        </form>
    );
};

export default EmailLogin;