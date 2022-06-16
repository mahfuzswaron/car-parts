import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReviewCard from './ReviewCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://car-parts-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviews])

    if (!reviews || !reviews.length) return <p>loading...</p>

    return (
        <section className='flex flex-col items-center relative'>
            <h3 className='text-4xl text-center text-primary font-semibold mb-10 mt-5'>Happy Customers say</h3>

            <img className='w-full' src="https://i.ibb.co/r4zChJh/customer-review.jpg" alt="customer-review" border="0"></img>

            <Carousel className="w-1/2 bg-primary rounded-box  absolute bottom-96  shadow-lg" showArrows={true}  >
                {
                    reviews.map(r => <ReviewCard
                        key={r._id}
                        review={r}
                    ></ReviewCard>)
                }


            </Carousel>


        </section>
    );
};

export default Reviews;


{/* <div className="flex justify-center w-full py-2 gap-2 my-5">
    {
        reviews.map((a, i) => <a key={a._id} href={`#${a._id}`} className="btn btn-xs btn-ghost rounded-full">{i + 1}</a>)
    }
</div> */}