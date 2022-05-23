import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, _id, description, ratings } = review;
    return (
        <div id={_id} class="card carousel-item max-w-sm bg-base-100 shadow-xl">
            <div class="avatar flex justify-center mt-3">
                <div class="w-20 rounded">
                    <img src="https://api.lorem.space/image/face?hash=88560" alt='' />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{ratings} stars</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;