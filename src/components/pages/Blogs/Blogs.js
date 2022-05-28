import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-primary text-center font-medium'>Blogs</h1>
            <Blog
                question='How to improve performance of a React App?'
                answer={`1. Devide Parent Component into many child components to prevent unnecessary re-render \n 
                2. Use useMemo() to cashe unchanged data. \n
                3. Code in DRY policy.
                `}
            ></Blog>
            <Blog
                question='What are the different ways to manage state in a React App?'
                answer={`1. Hooks \n 
                2. Context API \n
                3. Using useParams.
                `}
            ></Blog>
            <Blog
                question='Why we do not set state directly in React?'
                answer={`
                    Because it will not re-render the component immediately on change. 
                `}
            ></Blog>
            <Blog
                question='What is unit test? why should write unit test?'
                answer={`Unit testing is a application testing method where “units”—the individual components of app—are tested. \n
                To make sure that the code is working well, we should write unit test.
                `}
            ></Blog>
        </div>
    );
};

export default Blogs;