import React, { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import axios from 'axios';
const ShoppingCarts = ({ cart, onAddToCart, removeItemFromCart, handleRemoveItem }) => {

    const totalPrice = cart?.reduce((total, item) => total + item.price * item.quantity, 0);

    const [status, setStatus] = useState(false);

    const host = "http://localhost:8000/api/placeorder";

    const handleConfirmOrder = async () => {
        try {
            const itemData = {
                items: cart.map(item => ({
                    productId: item._id,
                    quantity: item.quantity,
                    price: item.price
                })),
                totalAmount: totalPrice
            }

            const response = await axios.post(host, itemData);

            if (response.status === 201) {
                setStatus(true)
                alert("Order added successfully");
            }
        } catch (error) {
            console.log("Error to place order:")
        }


    }


    const cancleOrder = (itemId) => {
        alert("Order Cencelled successfully");
        handleRemoveItem(itemId)
    }
    return (
        <div className='px-5 my-10 flex flex-col gap-10'>
            <div className='font-medium'>Add To Cart</div>
            <div className=''>

                {cart?.length === 0 ? (
                    <div>
                        <div>Your cart is empty.</div>
                        <div className='flex justify-center items-center h-[400px]'>
                            <Link to="/" className='px-4 py-1 bg-gray-600 text-white rounded-md'>Go to Product</Link>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-5 mb-20 h-[450px] sm:overflow-y-auto'>
                        {cart?.map((item) => (
                            <div key={item._id} className='flex border p-2 gap-5 max-sm:flex-col justify-between max-sm:justify-between sm:items-center bg-white'>
                                <div className=' flex items-center max-sm:justify-between'>
                                    <div>
                                        <img src={item.imageURL} alt={item.name} className='h-20 w-20 p-2 object-cover' />

                                    </div>

                                    <div className='flex flex-col mx-4'>
                                        <div className='font-semibold'>{item.name}</div>
                                        <div className='text-gray-600'>{item.price} {item.currency}</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 max-sm:w-full'>



                                    <div>
                                        {status ?
                                            <button
                                                onClick={() => { cancleOrder(item._id) }}
                                                className='bg-red-500 w-full text-white border border-gray-300 p-1 rounded px-5 py-1 '
                                            >
                                                Cancel
                                            </button>
                                            :

                                            <div className='flex items-center gap-5 max-sm:w-full'>
                                                <button
                                                    className='flex justify-between max-sm:w-full items-center bg-gray-300 text-black border p-1 rounded'>Qty:
                                                    <span className='flex gap-1 items-center mx-2'>
                                                        <CiSquareMinus size={24} onClick={() => removeItemFromCart(item)} />
                                                        {" "}

                                                        <p className='text-[20px]'>
                                                            {item.quantity}
                                                        </p>

                                                        {" "}

                                                        <CiSquarePlus size={24} onClick={() => onAddToCart(item)} />
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => { handleRemoveItem(item._id) }}
                                                    className='bg-orange-500 w-full text-white border border-gray-300 p-1 rounded px-5 py-1'
                                                >
                                                    Delete
                                                </button>
                                            </div>

                                        }
                                    </div>

                                </div>
                            </div>
                        ))}
                        <hr className='' />

                        <div className='pb-10 flex justify-center'>
                            <button
                                onClick={handleConfirmOrder}
                                className='bg-orange-500 w-full md:w-[300px] text-white border border-gray-300 px-2 py-2 rounded'
                            >
                                {status === false
                                    ? `Confirm Order $${totalPrice?.toFixed(2)} ${cart[0]?.currency}`
                                    : status === true
                                        ? "Order Placed"
                                        : "Order Pending..."
                                }
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCarts;