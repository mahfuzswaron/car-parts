import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>sorry! wrong path</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFound;