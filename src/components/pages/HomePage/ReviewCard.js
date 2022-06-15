import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, _id, description, ratings } = review;
    const arr = [1, 2, 3, 4, 3];
    return (
        <div id={_id} className="card carousel-item w-2/3 bg-base-100 shadow-xl">
            <div className="avatar flex justify-center mt-3">
                <div className="w-20 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div class="flex space-x-2">
                    {
                        arr.map(a => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>)
                    }
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;