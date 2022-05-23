import React from 'react';

const ProductCard = ({ product }) => {
    const { name, _id, description, img, quantity, min_quantity, price } = product;
    // console.log(product)
    return (
        <div class="card max-w-sm bg-white shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-start text-left">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><span className='font-bold'>${price}</span> Per Unit</p>
                <p>Quantity: <span className='font-bold'>{quantity}</span></p>
                <p>Minimum Order Quantity: <span className='font-bold'> {min_quantity}</span></p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;