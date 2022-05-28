import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);
    if (!users) {
        return <p>Loading...</p>
    };

    const handlMakeAdmin = (user) => {
        // console.log(email, 'is now admin');
        const updatedUser = {
            name: user.name,
            email: user.email,
            role: 'admin'
        }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: user.email
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <table className='w-full my-5'>
                <thead>
                    <tr className=''>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Email</td>
                        <td className='font-bold text-primary'>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id} className={index % 2 === 0 && 'bg-base-200'}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.role === 'user' && <button onClick={() => handlMakeAdmin(user)} className='btn btn-xs btn-success text-white'>
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