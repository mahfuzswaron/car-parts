import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const EmailLogin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='shadow-md p-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-4xl text-primary text-center font-semibold mb-5'>Please Log in</h3>
            <input type='email' placeholder='Email Adress' className='input input-bordered w-full ' {...register("email", {
                required: true
            })} />
            <input type='password' placeholder='Password' className='input input-bordered w-full' {...register("password", {
                required: true,
                minLength: 6,
            })} />
            <input className='btn btn-primary' value='Log in' type="submit" />
            <p>New to Car Parts? <Link to='/registar' className='underline'>Registar here</Link></p>
        </form>
    );
};

export default EmailLogin;