import React from 'react';
import useProducts from "../../../hooks/useProducts";
import Loader from '../../shared/Loader';
const ManageProducts = () => {
    const [products, status] = useProducts([]);
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
    if (status === "loading") return <Loader />
    return (
        <div className='py-5 lg:py-10'>
            <h1 className='font-medium lg:text-3xl text-xl text-center lg:text-left text-primary uppercase' >Manage Products</h1>
            <table className='w-full my-5 text-xs lg:text-lg  font-p'>
                <thead>
                    <tr className=''>
                        <td></td>
                        <td className='font-bold text-primary'>Name</td>
                        <td className='font-bold text-primary'>Price</td>
                        <td className='font-bold text-primary'>Quantity</td>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        products.map((product, index) => <tr key={product._id} className={` h-10  ${index % 2 === 0 && 'bg-white'}`}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => handleRemove(product._id)} className='btn btn-xs text-[0.5rem]  btn-error rounded-full '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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