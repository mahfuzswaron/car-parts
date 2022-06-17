import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import Loader from '../../shared/Loader';


const Dashboard = () => {

    const [fetchedUser, loading] = useUser([]);
    if (loading) return <Loader />

    return (
        <div>
            <div className='flex justify-evenly lg:justify-center items-center relative'>
                <h1 className='text-center uppercase text-neutral hover:text-primary font-semibold text-3xl lg:text-4xl my-5'>Dashboard</h1>
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                    </label>
                </div>
            </div>

            <div className='lg:flex lg:relative absolute  font-p'>
                <div className="drawer drawer-mobile max-w-sm">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                    <div className=" drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 rounded overflow-y-auto w-80 bg-white text-base-content">

                            {
                                fetchedUser?.role === "user" &&
                                <>
                                    <li><Link to="myorders">My Orders</Link></li>
                                    <li><Link to="addreview">Add Review</Link></li>
                                </>
                            }
                            {
                                fetchedUser?.role === 'admin' &&
                                <>
                                    <li><Link to="manageorders">Manage Orders</Link></li>
                                    <li><Link to="addproduct">Add Product</Link></li>
                                    <li><Link to="manageproducts">Manage Product</Link></li>
                                    <li><Link to="makeadmin">Make Admin</Link></li>
                                </>
                            }
                            <li><Link to="myprofile">My Profile</Link></li>
                        </ul>

                    </div>
                </div>
                <div className='lg:flex-grow lg:block hidden'>
                    <Outlet />
                </div>
            </div>
            <div className='lg:flex-grow lg:hidden'>
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;