import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';
const Registar = () => {
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const addToDb = data => {
        const { name, email } = data;
        const user = {
            name,
            email,
            role: 'user'
        };
        fetch('https://car-parts-server.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: data.email
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    const onSubmit = async data => {
        console.log(data);
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await addToDb(data);
        navigate(from, { replace: true });

    };

    if (error || updateError) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || updating) {
        return <Loader />
    }
    if (user) {
        console.log(user)
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    };

    return (
        <form className='px-5 pt-5 pb-24  lg:w-2/3 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='lg:text-4xl text-3xl text-neutral hover:text-primary text-center font-semibold mb-5 uppercase '>Please Registar</h3>
            <div className='grid grid-cols-1 gap-2 font-p'>
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
            </div>
            <input className='btn btn-primary w-full my-2 text-lg' value='Registar' type="submit" />
            <p className='font-p'>Already have an account? <Link to='/login' className='underline hover:text-primary'>Log in here</Link></p>
        </form>
    );
};

export default Registar;