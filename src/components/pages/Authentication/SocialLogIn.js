import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import Loader from '../../shared/Loader';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const addToDb = data => {
        const { name, email } = data;
        const user = {
            name,
            email,
            role: 'user'
        };
        fetch('https://car-parts-server.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                email: data.email
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loader />
    }
    if (user) {
        console.log(user);
        addToDb({
            name: user.user.displayName,
            email: user.user.email
        })
        return (
            <div>
                <p>Signed In User: {user.user.email}</p>
            </div>
        );
    }

    return (
        <div>
            <button onClick={async () => {
                await signInWithGoogle();
                navigate(from, { replace: true });
            }}
                className='btn btn-outline btn-primary font-p'>SIGN IN WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogIn;