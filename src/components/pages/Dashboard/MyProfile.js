import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const profile = data;

        fetch('https://car-parts-server.herokuapp.com/profiles', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: user.email
            },
            body: JSON.stringify(profile)
        })
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true)
                }
                return res.json()
            })
            .then(data => console.log(data))

    }
    return (
        <section>

            <h3 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase '>My Profile</h3>
            {
                success && <p className='text-success text-left font-medium'>changes saved</p>
            }
            <form className='p-5 rounded-md grid grid-cols-1 gap-3 w-2/3 ' onSubmit={handleSubmit(onSubmit)}>
                <label className='label-text' >Your Name</label>
                <input type='text' placeholder='Full Name' className='input input-bordered w-full ' {...register("name")} />

                <label className='label-text' >Your Email</label>
                <input type='email' placeholder='Email Adress' className='input input-bordered w-full ' {...register("email")} />

                <label className='label-text' >Your Educational Institute</label>
                <input type='text' placeholder='Institution Name' className='input input-bordered w-full ' {...register("institutin")} />

                <label className='label-text' >Adress</label>
                <input type='text' placeholder='Your Adress' className='input input-bordered w-full ' {...register("location")} />

                <label className='label-text' >Phone</label>
                <input type='tel' placeholder='Your Phone Number' className='input input-bordered w-full ' {...register("location")} />

                <label className='label-text' >LinkedIn Profile</label>
                <input type='text' placeholder='LinkedIn Profile Link' className='input input-bordered w-full ' {...register("socialLink")} />

                <input className='btn btn-primary w-48' value='Save' type="submit" />
            </form>
        </section>
    );
};

export default MyProfile;