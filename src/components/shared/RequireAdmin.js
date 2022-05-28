import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [fetchedUser, setFetchedUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFetchedUser(data)
            })
    }, [user])

    if (!fetchedUser?.role || loading) {
        return <p>Loading...</p>
    }
    if (fetchedUser.role !== 'admin') {
        return <Navigate to='/dashboard' />
    }

    return children;
};

export default RequireAdmin;