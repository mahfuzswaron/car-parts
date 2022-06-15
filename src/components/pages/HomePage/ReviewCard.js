import React from 'react';
import Rating from 'react-rating';

const fullStar = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-primary" viewBox="0 0 20 20" >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-secondary " viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

const ReviewCard = ({ review }) => {
    const { name, _id, description, ratings } = review;
    const arr = [1, 2, 3, 4, 3];
    return (
        <div className='font-p w-2/3 p-3 bg-white border'>
            <div className='flex items-start py-3'>
                <figure className='w-16 h-16'>
                    <img src='https://i.ibb.co/Mh95ckN/user.png' alt="user" />
                </figure>
                <div>
                    <h3 className='text-md font-semibold mt-1 text-neutral'>
                        {name}
                    </h3>

                    <div>
                        <Rating
                            initialRating={ratings}
                            emptySymbol={emptyStar}
                            fullSymbol={fullStar}
                            readonly
                        />
                    </div>
                </div>
            </div>
            <div className='text-sm'>
                this is a big description that user didn't post. the fazil developer has written in code. he tried to make this so longer. but couldn't. the failure.
            </div>
        </div>
    );
};

export default ReviewCard;