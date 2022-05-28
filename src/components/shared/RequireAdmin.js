import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
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
        console.log('loading');
        return <p>Loading...</p>
    }
    if (fetchedUser.role !== 'admin') {
        console.log(fetchedUser);
        return <Navigate to='/dashboard' />
    }

    return children
};

export default RequireAdmin;