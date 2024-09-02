import React, { useState } from 'react'

const ProductCard = ({ data, onAddToCart }) => {



    const splitWithSpace = (string) => {
        return string.split(' ')[0];
    }



    return (

        <div className='border relative shadow-md'>
            <div
                className={`absolute z-10 top-2 left-2 text-[12px] 
                    ${splitWithSpace(data.name) === "Black" ? "bg-black text-white "
                        : splitWithSpace(data.name) === "Blue" ? "bg-blue-500 text-white "
                            : splitWithSpace(data.name) === "Pink" ? "bg-pink-500 text-white "
                                : splitWithSpace(data.name) === "Green" ? "bg-green-500 text-white "
                                    : splitWithSpace(data.name) === "Red" ? "bg-red-500 text-white "
                                        : splitWithSpace(data.name) === "Purple" ? "bg-purple-500 text-white "
                                            : splitWithSpace(data.name) === "Grey" ? "bg-gray-700 text-white "
                                                : splitWithSpace(data.name) === "White" ? "bg-white text-black " : "bg-yellow-400 text-white"} shadow-lg bg-orange-500 rounded-full px-2 py-1 font-normal`}>
                {data?.name}
            </div>
            <div className='flex-1 flex justify-center py-5 bg-white'>
                <img src={data?.imageURL} alt='product-img' className='h-[140px] aspect-square' />
            </div>
            <div className=' flex justify-between items-center  px-2'>
                <div className='font-medium'>
                    Rs.{data?.price}
                </div>
                <div className='py-2'>
                    <button onClick={onAddToCart} className=' cursor-pointer py-2 px-3 font-medium rounded-full text-white bg-zinc-500'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard