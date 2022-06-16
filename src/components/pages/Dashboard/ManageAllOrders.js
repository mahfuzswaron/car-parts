import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://car-parts-server.herokuapp.com/allorders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    const handleShip = id => {
        const url = `https://car-parts-server.herokuapp.com/orders/${id}`;
        console.log(id, 'shipped');
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h3 className='font-medium lg:text-3xl text-2xl text-primary uppercase'>Manage All Orders</h3>
            <table className='w-full my-5  font-p'>
                <thead>
                    <tr className='text-sm lg:text-lg'>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Quantity</td>
                        <td className='font-bold text-primary'>Price</td>
                        <td className='font-bold text-primary'>Status</td>
                    </tr>
                </thead>
                <tbody className='text-xs lg:text-lg'>
                    {
                        orders.map((order, index) => <tr className={` h-10  ${index % 2 === 0 && 'bg-white'}`}>
                            <td>{index + 1}</td>
                            <td className=' '>{order.name}</td>
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