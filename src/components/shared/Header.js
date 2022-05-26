import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    }


    const home = <Link to='/'>HOME</Link>
    const dashboard = <Link to='/dashboard'>DASHBOARD</Link>
    const login = <Link to='/login'>LOGIN</Link>
    const blogs = <Link to='/blogs'>BLOGS</Link>

    return (
        <div className='mx-5 flex justify-center'>
            <div className="navbar bg-base-100 w-2/3 mx-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{home}</li>
                            <li>{blogs}</li>
                            {
                                user?.email ?
                                    <>
                                        <li>{dashboard}</li>
                                        <li><button onClick={() => signOut(auth)} className='btn-ghost'>LOG OUT</button></li>
                                    </>
                                    :
                                    <li>{login} </li>
                            }

                        </ul>
                    </div>
                    <Link className='font-bold text-2xl' to='/'> <span className='text-primary'>CAR </span> PARTS</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>{home}</li>
                        <li>{blogs}</li>
                        {
                            user?.email ?
                                <>
                                    <li>{dashboard}</li>
                                    <li><button onClick={() => signOut(auth)} className='btn-ghost'>LOG OUT</button></li>
                                </>
                                :
                                <li>{login} </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;