import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading] = useAuthState(auth)
    const url = 'http://localhost:5000/orders';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                email: user?.email
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user]);

    if (loading) {
        return <p>loading...</p>
    }

    return (
        <div>
            {orders?.length}
        </div>
    );
};

export default MyOrders;