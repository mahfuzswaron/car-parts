import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, _id, description, img, quantity, min_quantity, price } = product;
    const navigate = useNavigate();
    return (
        <div className="card max-w-sm bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-left">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><span className='font-bold'>${price}</span> Per Unit</p>
                <p>Quantity: <span className='font-bold'>{quantity}</span></p>
                <p>Minimum Order Quantity: <span className='font-bold'> {min_quantity}</span></p>
                <div className="card-actions">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;