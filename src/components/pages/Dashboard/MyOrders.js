import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth)
    const url = 'https://car-parts-server.herokuapp.com/orders';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                email: user?.email
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user, orders]);

    const handleCancel = (id, name) => {
        const confirm = window.confirm(`Are you sure to cancel ${name}?`)
        if (confirm) {
            fetch(`https://car-parts-server.herokuapp.com/allorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <section className='py-5 lg:py-10'>
            <h3 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase '>My Orders</h3>
            <table className='w-full my-5 text-xs lg:text-lg  font-p'>
                <thead>
                    <tr className=''>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Quantity</td>
                        <td className='font-bold text-primary'>Price</td>
                        <td className='font-bold text-primary'>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr className={` h-10  ${index % 2 === 0 && 'bg-white'}`}>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{parseInt(order.quantity) * parseInt(order.price)}</td>
                            <td className={
                                order.status === 'pending' ? 'text-warning' : 'text-success'}>{order.status}
                            </td>
                            <td>{order.status === 'pending' && <button className='btn btn-xs btn-success my-2 text-white'>
                                Pay
                            </button>}
                            </td>
                            <td>
                                <button onClick={() => handleCancel(order._id, order.name)} className='my-2 btn btn-xs text-[0.5rem]  btn-error rounded-full '>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default MyOrders;