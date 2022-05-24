import React from 'react';
import { useForm } from "react-hook-form";

const EmailLogin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='shadow-md p-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-4xl text-primary text-center font-semibold mb-5'>Please Login</h3>
            <input type='email' placeholder='Email Adress' className='input input-bordered w-full ' {...register("email", {
                required: true
            })} />
            <input type='password' placeholder='Password' className='input input-bordered w-full' {...register("password", {
                required: true,
                minLength: 6,
            })} />
            <input className='btn btn-primary' type="submit" />
        </form>
    );
};

export default EmailLogin;