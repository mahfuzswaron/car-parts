import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, _id, description, ratings } = review;
    return (
        <div id={_id} className="card carousel-item max-w-sm bg-base-100 shadow-xl">
            <div className="avatar flex justify-center mt-3">
                <div className="w-20 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{ratings} stars</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;