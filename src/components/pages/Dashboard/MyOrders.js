import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
            fetch(`http://localhost:5000/allorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
    }

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <section>
            <h3 className='font-medium text-3xl '>My Orders</h3>
            <table className='w-full my-5'>
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
                        orders.map((order, index) => <tr className={index % 2 === 0 && 'bg-base-200'}>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{parseInt(order.quantity) * parseInt(order.price)}</td>
                            <td className={
                                order.status === 'pending' ? 'text-warning' : 'text-success'}>{order.status}
                            </td>
                            <td>{order.status === 'pending' && <button className='btn btn-xs btn-success text-white'>
                                Pay
                            </button>}
                            </td>
                            <td>
                                <button onClick={() => handleCancel(order._id, order.name)} className='btn btn-xs btn-error'>cancel</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default MyOrders;