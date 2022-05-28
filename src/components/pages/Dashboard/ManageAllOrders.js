import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allorders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    const handleShip = id => {
        const url = `http://localhost:5000/orders/${id}`;
        console.log(id, 'shipped');
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h3 className='font-medium text-3xl '>Manage All Orders</h3>
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
                                order.status === 'pending' ? 'text-warning ' : 'text-success'}>{order.status}
                            </td>
                            <td>{order.status !== 'shipped' && <button onClick={() => handleShip(order._id)} className='btn btn-xs btn-success text-white'>
                                ship
                            </button>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;