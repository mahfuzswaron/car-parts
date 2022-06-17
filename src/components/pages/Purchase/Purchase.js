import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';
import Success from '../../shared/Success';
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
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        const order = {
            productId: id,
            name: product.name,
            location: data.location,
            phone: data.phone,
            quantity: data.orderedQuantity,
            price: product.price,
            img: product.img,
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
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true)
                }
                return res.json()
            })
            .then(result => console.log(result))


    };

    if (loading || !product) {
        return <Loader />
    }
    const { name, quantity, min_quantity, price } = product;

    return (
        <div className='w-full lg:w-1/2 mx-auto py-20'>
            <div className='font-p'>
                <h1 className='text-center text-xl'>Hi, {user?.displayName},</h1>
                <p className='text-center '>You are purchasing <strong className='text-primary'>{name}</strong> with this mail: <em>{user?.email}</em></p>
            </div>

            {
                success ?
                    <Success>
                        Order added in your pending list. Please pay to complete.
                    </Success>
                    :
                    <form className='p-5 mb-5 mt-5 ' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-3xl lg:text-4xl text-neutral hover:text-primary text-center font-semibold mb-5 uppercase '>Confirm Order</h3>
                        <div className='font-p grid grid-cols-1 gap-2'>
                            <input type='text' placeholder='Your Location' className='input input-bordered w-full ' {...register("location", {
                                required: true
                            })} />
                            <p className='text-error'>{errors.location?.type === 'required' && "Location is required"}</p>

                            <input type='tel' placeholder='Your Contact Number' className='input input-bordered w-full' {...register("phone", {
                                required: true
                            })} />
                            <p className='text-error'>{errors.phone?.type === 'required' && "Phone Number is required"}</p>

                            <input type='number' placeholder={`Product Quantity (${min_quantity} - ${quantity})`} onKeyUp={(e) => {
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
                        </div>

                        <input className='btn btn-primary mt-2 w-full text-lg' value='Order' type="submit" />
                    </form>
            }
            <div className='flex justify-between '>
                <button className='btn btn-outline btn-primary px-8 py-3'>
                    <Link to="/">Back</Link>
                </button>
                <button className='btn btn-success text-white px-10 py-3'>
                    <Link to={`/payment/${id}`}>Pay</Link>
                </button>
            </div>
        </div>
    );
};

export default Purchase;
