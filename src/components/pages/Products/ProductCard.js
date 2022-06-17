import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, _id, description, img, quantity, min_quantity, price } = product;
    const navigate = useNavigate();
    return (
        <div className="card max-w-sm bg-white shadow-xl">
            <figure className="px-3 pt-3 w-full h-1/2 overflow-clip">
                <img src={img} alt={name} className="rounded-xl hover:scale-110 ease-in duration-200" />
            </figure>
            <div className="card-body text-left ">
                <h2 className="card-title justify-center uppercase text-neutral">{name}</h2>
                <p className='text-center font-p'>{description}</p>
                <div className='flex  w-full font-p uppercase'>
                    <p><span className='font-medium text-primary'>{quantity}</span> Available </p>
                    <p className='text-primary text-center text-xl'  >|</p>
                    <p className='text-right'>Order min<span className='font-medium text-primary'> {min_quantity}</span></p>
                </div>
                <p className='font-p text-center uppercase'>Per piece <span className='font-medium'>${price}</span></p>

                <div className="w-full ">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary w-full rounded-full text-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;