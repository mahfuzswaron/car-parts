import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader';

const MakeAdmin = () => {
    const fetchUsers = async () => {
        const res = await fetch("https://car-parts-server.herokuapp.com/users");
        return res.json();
    }
    const { data, status } = useQuery("orders", fetchUsers)

    if (status === "loading") return <Loader />

    const handlMakeAdmin = (user) => {
        // console.log(email, 'is now admin');
        const updatedUser = {
            name: user.name,
            email: user.email,
            role: 'admin'
        }
        fetch('https://car-parts-server.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: user.email
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
        // .then(data => console.log(data));
    }
    return (
        <div className='py-5 lg:py-10'>
            <h1 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase' >Make Admin</h1>
            <table className='w-full my-5 text-xs lg:text-lg  font-p'>
                <thead>
                    <tr className=''>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Email</td>
                        <td className='font-bold text-primary'>Role</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        data.map((user, index) => <tr key={user._id} className={` h-10  ${index % 2 === 0 && 'bg-white'}`}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.role === 'user' && <button onClick={() => handlMakeAdmin(user)} className='btn btn-xs text-[0.5rem] p-1 lg:text-xs lg:px-3 btn-success text-white rounded-full'>
                                Make Admin
                            </button>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;