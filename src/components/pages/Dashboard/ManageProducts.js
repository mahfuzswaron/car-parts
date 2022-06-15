import React from 'react';
import useProducts from "../../../hooks/useProducts";
const ManageProducts = () => {
    const [products] = useProducts([]);
    const handleRemove = id => {
        const confirm = window.confirm('Are you sure to remove this product?');
        if (confirm) {

            fetch(`https://car-parts-server.herokuapp.com/deleteproduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    return (
        <div>
            <h1 className='font-medium text-3xl' >Manage Products</h1>
            <table className='w-full my-5'>
                <thead>
                    <tr className=''>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Price</td>
                        <td className='font-bold text-primary'>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={product._id} className={index % 2 === 0 && 'bg-base-200'}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => handleRemove(product._id)} className='btn btn-xs btn-error text-white'>
                                Remove
                            </button>
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ManageProducts;