import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h3 className='text-3xl text-primary text-center font-medium'>My Portfolio</h3>
            <div className='ml-10'>
                <h5 className='text-2xl'>Abdulla Al Mahfuz Swaron</h5>
                <p className='text-lg'>Email: mahfuzswaron@gmail.com</p>
                <h6 className='text-xl mt-3 font-medium'>Education</h6>
                <p>
                    <span className='text-lg block'>Brahmanbaria Polytechnic Institute</span>
                    <span className='block'>Computer science</span>
                    <small className='block'>2020-2024</small>
                </p>
                <h6 className='text-xl mt-3 font-medium'>Skills</h6>
                <p>
                    HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP, TAILWIND, EXPRESS.JS
                </p>
                <h6 className='text-xl mt-3 font-medium'>Projects</h6>
                <ul>
                    <li><a className='underline' href='https://react-to-do-app-41e4a.web.app/'>React Todo App</a></li>
                    <li><a className='underline' href='https://laptop-stock-new.web.app/inventories'>Laptop Stock</a></li>
                    <li><a className='underline' href='https://digital-watch-ms.netlify.app/'> Javascript Watch</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;