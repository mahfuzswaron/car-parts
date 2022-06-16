import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

export default function useUser() {

    const [user, loading] = useAuthState(auth);
    const [fetchedUser, setFetchedUser] = useState({});
    useEffect(() => {
        fetch(`https://car-parts-server.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFetchedUser(data)
            })
    }, [])

    return [fetchedUser, loading]
}