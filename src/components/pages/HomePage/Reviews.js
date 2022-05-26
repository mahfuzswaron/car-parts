import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://car-parts-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <section className='flex flex-col items-center'>
            <h3 className='text-4xl text-center text-primary font-semibold mb-10 mt-5'>Happy Customers say</h3>
            <div className="carousel carousel-center max-w-lg my-5 p-4 space-x-4 bg-neutral rounded-box">
                {
                    reviews.map(r => <ReviewCard
                        key={r._id}
                        review={r}
                    ></ReviewCard>)
                }

            </div>
            <div className="flex justify-center w-full py-2 gap-2 my-5">
                {
                    reviews.map((a, i) => <a key={a._id} href={`#${a._id}`} className="btn btn-xs btn-ghost rounded-full">{i + 1}</a>)
                }
            </div>
        </section>
    );
};

export default Reviews;