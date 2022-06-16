import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loader from './Loader';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }


    const home = <Link className='font-semibold' to='/'>HOME</Link>
    const dashboard = <Link className='font-semibold' to='/dashboard'>DASHBOARD</Link>
    const login = <Link className='font-semibold btn btn-outline btn-primary' to='/login'>LOG IN</Link>
    const blogs = <Link className='font-semibold' to='/blogs'>BLOGS</Link>
    const logOut = <button onClick={() => signOut(auth)} className='btn btn-outline btn-neutral font-semibold'>LOG OUT</button>
    const products = <Link className='font-semibold' to='/products'>PRODUCTS</Link>

    return (
        <div className='font-p'>
            <div className="navbar bg-white px-5 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{home}</li>
                            <li>{products}</li>
                            <li>{blogs}</li>
                            {
                                user?.email ?
                                    <>
                                        <li>{dashboard}</li>
                                        <li>{logOut} </li>
                                    </>
                                    :
                                    <li>{login} </li>
                            }

                        </ul>
                    </div>
                    <Link style={{ 'fontFamily': 'Oswald' }} className='font-semibold text-lg lg:text-2xl' to='/'> <span className='text-primary'>CAR </span> PARTS</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>{home}</li>
                        <li>{products}</li>
                        <li>{blogs}</li>
                        {
                            user?.email ?
                                <>
                                    <li>{dashboard}</li>
                                    <li>{logOut} </li>
                                </>
                                :
                                <li className='' >{login} </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;