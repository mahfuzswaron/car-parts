import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className='shadow-md p-5 rounded-md grid grid-cols-1 gap-3 w-2/3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-4xl text-primary text-center font-semibold mb-5'>Please Registar</h3>
            <input type='text' placeholder='Full Name' className='input input-bordered w-full ' {...register("name", {
                required: true
            })} />
            <input type='email' placeholder='Email Adress' className='input input-bordered w-full ' {...register("email", {
                required: true
            })} />
            <input type='password' placeholder='Password' className='input input-bordered w-full' {...register("password", {
                required: true,
                minLength: 6,
            })} />
            <input className='btn btn-primary' value='Registar' type="submit" />
            <p>Already have an account? <Link to='/login' className='underline'>Log in here</Link></p>
        </form>
    );
};

export default Registar;