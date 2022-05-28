import React from 'react';

const Blog = ({ question, answer }) => {
    return (
        <div className='text-left my-4 mx-4 border-l-4 border-primary pl-3 my-3 '>
            <h3 className='ms-3 mb-2 font-bold'>{question}
            </h3>
            <p className='ms-3 mb-2 whitespace-pre-line'>
                {answer}
            </p>
        </div>
    );
};

export default Blog;