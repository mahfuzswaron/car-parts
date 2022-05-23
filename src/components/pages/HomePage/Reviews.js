import React from 'react';
import ReviewCard from './ReviewCard';


const Reviews = () => {
    const arr = ['1', '2', '3', '4', '5', '6',];
    const reviews = [
        {
            _id: 'item1',
            name: 'User1',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 'item2',
            name: 'User2',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 'item3',
            name: 'User3',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 'item4',
            name: 'User4',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 'item5',
            name: 'User5',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            _id: 'item6',
            name: 'User6',
            ratings: 4,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
    ]
    return (
        <section className='flex flex-col items-center'>
            <h3 className='text-5xl text-center text-primary font-semibold mb-10 mt-5'>Happy Customers say</h3>
            <div class="carousel carousel-center max-w-lg my-5 p-4 space-x-4 bg-neutral rounded-box">
                {
                    reviews.map(r => <ReviewCard
                        key={r._id}
                        review={r}
                    ></ReviewCard>)
                }

            </div>
            <div class="flex justify-center w-full py-2 gap-2 my-5">
                {
                    reviews.map(a => <a key={a._id} href={`#${a._id}`} className="btn btn-xs">*</a>)
                }
            </div>
        </section>
    );
};

export default Reviews;
{/* <div id={a} class="carousel-item">
    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" alt='' className="rounded-box" />
</div> */}