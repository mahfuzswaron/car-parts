import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
const Purchase = () => {
    const id = useParams().id;
    const [product, setProduct] = useState();
    const url = `https://car-parts-server.herokuapp.com/parts/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [url]);


    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [productPrice, setProrductPrice] = useState(0);
    const onSubmit = data => {
        const order = {
            productId: id,
            name: product.name,
            location: data.location,
            phone: data.phone,
            quantity: data.orderedQuantity,
            status: 'pending'
        }

        fetch('https://car-parts-server.herokuapp.com/order', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: user.email
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => console.log(result))


    };

    if (loading || !product) {
        return <p>Loading...</p>;
    }
    const { name, quantity, min_quantity, price } = product;

    return (
        <div className='w-1/2 mx-auto'>
            <div>
                <h1 className='text-center text-xl'>Hi, {user?.displayName},</h1>
                <p className='text-center '>You are purchasing <strong className='text-primary'>{name}</strong> with this mail: <em>{user?.email}</em></p>
            </div>

            <form className='p-5 mb-5 mt-5 rounded-md grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-4xl text-primary text-center font-semibold mb-5'>Confirm Order</h3>
                <input type='text' placeholder='Your Location' className='input input-bordered w-full ' {...register("location", {
                    required: true
                })} />
                <p className='text-error'>{errors.location?.type === 'required' && "Location is required"}</p>

                <input type='tel' placeholder='Your Contact Number' className='input input-bordered w-full' {...register("phone", {
                    required: true
                })} />
                <p className='text-error'>{errors.phone?.type === 'required' && "Phone Number is required"}</p>

                <input type='number' placeholder={`Product Quantity (${min_quantity} - ${quantity})`} onKeyUp={(e) => {
                    console.log(e.target.value)
                    setProrductPrice(e.target.value * price)
                }} className='input input-bordered w-full' {...register("orderedQuantity", {
                    required: true,
                    min: min_quantity,
                    max: quantity
                })} />

                {
                    errors?.orderedQuantity &&
                    <>
                        <p className='text-error'>{errors.orderedQuantity?.type === 'required' && "Order Quantity is required"}</p>
                        <p className='text-error'>{(errors.orderedQuantity?.type === 'min' || errors.orderedQuantity?.type === 'max') && `Order Quantity is must be within ${min_quantity} - ${quantity}`}</p>
                    </>

                }
                <p className='text-success'>{productPrice > 0 && `Subtotal: $${productPrice}`}</p>

                <input className='btn btn-primary' value='Order' type="submit" />
            </form>
            <div className='flex justify-between '>
                <button className='btn btn-outline btn-primary px-8 py-3'>
                    <Link to="/">Back</Link>
                </button>
                <button className='btn btn-primary px-10 py-3'>
                    <Link to={`/payment/${id}`}>Pay</Link>
                </button>
            </div>
        </div>
    );
};

export default Purchase;
