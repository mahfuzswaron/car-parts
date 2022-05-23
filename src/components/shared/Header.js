import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const home = <Link to='/'>HOME</Link>
    const dashboard = <Link to='/dashboard'>DASHBOARD</Link>
    const login = <Link to='/login'>LOGIN</Link>
    const blogs = <Link to='/blogs'>BLOGS</Link>
    const products = <Link to='/products'>PRODUCTS</Link>
    return (
        <div className='mx-5 flex justify-center'>
            <div class="navbar bg-base-100 w-2/3 mx-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{home}</li>
                            <li>{products}</li>
                            <li>{dashboard}</li>
                            <li>{blogs}</li>
                            <li>{login}</li>
                        </ul>
                    </div>
                    <Link className='font-bold text-2xl' to='/'> <span className='text-primary'>CAR </span> PARTS</Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>{home}</li>
                        <li>{products}</li>
                        <li>{dashboard}</li>
                        <li>{blogs}</li>
                        <li>{login}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;