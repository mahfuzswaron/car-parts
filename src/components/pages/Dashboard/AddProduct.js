import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    function onSubmit(data) {
        fetch('https://car-parts-server.herokuapp.com/addpart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h3 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase '>Add Product</h3>
            <form className='p-5 mb-5 mt-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>

                <input type='text' placeholder='Product' className='input input-bordered w-full ' {...register("name", {
                    required: true
                })} />
                <p className='text-error'>{errors.name?.type === 'required' && "Name is required"}</p>

                <input type='text' placeholder='Short Description' className='input input-bordered w-full ' {...register("description", {
                    required: true
                })} />
                <p className='text-error'>{errors.description?.type === 'required' && "Description is required"}</p>

                <input type='text' placeholder='Image url' className='input input-bordered w-full ' {...register("img", {
                    required: true
                })} />
                <p className='text-error'>{errors.img?.type === 'required' && "Name is required"}</p>

                <input type='number' placeholder='Available Quantity' className='input input-bordered w-full ' {...register("quantity", {
                    required: true
                })} />
                <p className='text-error'>{errors.quantity?.type === 'required' && "Name is required"}</p>

                <input type='number' placeholder='Minimum Order Quantity' className='input input-bordered w-full ' {...register("min_quantity", {
                    required: true
                })} />
                <p className='text-error'>{errors.min_quantity?.type === 'required' && "Name is required"}</p>

                <input type='number' placeholder='Price per unit' className='input input-bordered w-full ' {...register("price", {
                    required: true
                })} />
                <p className='text-error'>{errors.price?.type === 'required' && "Name is required"}</p>
                <input className='btn btn-primary' value='Add' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;