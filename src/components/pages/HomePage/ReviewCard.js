import React from 'react';
import Rating from 'react-rating';

const fullStar = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-[#ffc400] stroke-primary" viewBox="0 0 20 20" >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
const emptyStar = <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-secondary " viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>

const ReviewCard = ({ review }) => {
    const { name, _id, description, ratings } = review;


    return (
        <div id={_id} className='font-p carousel-item w-full h-full px-3 mb-0 pb-20 bg-opacity-50 bg-secondary rounded-box grid grid-cols-1 justify-evenly gap-0'>
            <div className='flex items-start space-x-4 pt-3  '>
                {/* profile pic  */}
                <figure className=' mask mask-circle'>
                    <img className='w-12 h-12' src='https://i.ibb.co/Mh95ckN/user.png' alt="user" />
                </figure>

                {/* name and rating */}
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

            {/* review description  */}
            <div className='text-md'>
                {/* this is a big description that user didn't post. the fazil developer has written in code. he tried to make this so longer. but couldn't. the failure. */}
                {description}
            </div>
        </div>
    );
};

export default ReviewCard;