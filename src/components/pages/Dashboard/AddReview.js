import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Success from '../../shared/Success';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const review = {
            email: user.email,
            ratings: data.ratings,
            description: data.description
        };

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true)
                }
                return res.json()
            })
            .then(data => console.log(data))

    }

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <section>
            {
                success ?
                    <Success>
                        Review added successfully
                    </Success>
                    :
                    <div>
                        <h3 className='text-3xl font-medium'>Add a review</h3>
                        <form className='shadow-md p-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                            <input type='number' placeholder='Rate out of 5' className='input input-bordered w-full ' {...register("ratings", {
                                required: true
                            })} />
                            <textarea type='text' placeholder='shrot description' className='input input-bordered w-full' {...register("description", {
                                required: true,
                            })} />
                            <input className='btn btn-primary' value='Post' type="submit" />

                        </form>
                    </div>
            }
        </section>
    );
};

export default AddReview;