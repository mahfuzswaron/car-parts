import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AddReview from './AddReview';
import MyOrders from './MyOrders';

const Dashboard = () => {
    return (
        <div>
            <div className='flex justify-evenly lg:justify-center items-center'>
                <h1 className='text-center text-primary font-semibold text-5xl my-5'>Dashboard</h1>
                <div class="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" class="drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                    </label>
                </div>
            </div>

            <div className='lg:flex'>
                <div class="drawer drawer-mobile max-w-sm">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

                    <div class=" drawer-side ">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">

                            <li><Link to="myorders">My Orders</Link></li>
                            <li><Link to="addreview">Add Review</Link></li>
                            <li><Link to="myprofile">Add Review</Link></li>
                            <li><Link to="manageorders">Add Review</Link></li>
                            <li><Link to="addproduct">Add Review</Link></li>
                            <li><Link to="manageproducts">Add Review</Link></li>
                            <li><Link to="makeadmin">Add Review</Link></li>
                        </ul>

                    </div>
                </div>
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;