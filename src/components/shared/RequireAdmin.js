import React from 'react';
import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Loader from "./Loader";
const RequireAdmin = ({ children }) => {
    const [fetchedUser, loading] = useUser([]);

    if (!fetchedUser?.role || loading) {
        return <Loader />
    }
    if (fetchedUser.role !== 'admin') {
        return <Navigate to='/dashboard' />
    }

    return children;
};

export default RequireAdmin;