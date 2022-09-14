import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader';

const ManageAllOrders = () => {
    // const [data, setOrders] = useState([]);
    // useEffect(() => {
    //     fetch(`https://car-parts-server.herokuapp.com/allorders`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [data]);
    const fetchOrders = async () => {
        const res = await fetch("https://car-parts-server.herokuapp.com/allorders");
        return res.json();
    }
    const { data, status } = useQuery("orders", fetchOrders)

    const handleShip = id => {
        const url = `https://car-parts-server.herokuapp.com/orders/${id}`;
        console.log(id, 'shipped');
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    if (status === "loading") return <Loader />
    return (
        <div className='py-5 lg:py-10'>
            <h1 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase'>Manage All Orders</h1>
            <table className='w-full my-5 text-xs lg:text-lg  font-p'>
                <thead>
                    <tr className=' '>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Quantity</td>
                        <td className='font-bold text-primary'>Price</td>
                        <td className='font-bold text-primary'>Status</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        data.map((order, index) => <tr className={` h-10  ${index % 2 === 0 && 'bg-white'}`}>
                            <td>{index + 1}</td>
                            <td className=' '>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{parseInt(order.quantity) * parseInt(order.price)}</td>
                            <td className={
                                order.status === 'pending' ? 'text-warning ' : 'text-success'}>{order.status}
                            </td>
                            <td>{order.status !== 'shipped' && <button onClick={() => handleShip(order._id)} className='btn btn-xs text-[0.5rem] p-1 lg:text-xs lg:px-3 btn-success text-white rounded-full'>
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