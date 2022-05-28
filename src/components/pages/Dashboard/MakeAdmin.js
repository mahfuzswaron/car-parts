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
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <h3>users: ({users.length})</h3>
        </div>
    );
};

export default MakeAdmin;