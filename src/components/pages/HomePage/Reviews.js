import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReviewCard from './ReviewCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Loader from '../../shared/Loader';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://car-parts-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.reverse()))

    }, [reviews])

    if (!reviews || !reviews.length) return <Loader />

    return (
        <section className='flex flex-col bg-white items-center lg:pt-20 pt-5 w-full'>
            <h3
                className='text-3xl lg:text-4xl font-semibold mb-16 text-center text-neutral hover:text-primary uppercase'
            >
                Happy customers say
            </h3>

            <div className='relative w-full'>
                <img className='w-full' src="https://i.ibb.co/r4zChJh/customer-review.jpg" alt="customer-review" border="0"></img>

                <Carousel className="w-1/2 bg-transparent rounded-box absolute lg:top-72 lg:right-20 top-5 right-5  shadow-lg"
                    showArrows={true} showThumbs={false} >
                    {
                        reviews.map(r => <ReviewCard
                            key={r._id}
                            review={r}
                        ></ReviewCard>)
                    }
                </Carousel>

            </div>

        </section>
    );
};

export default Reviews;

