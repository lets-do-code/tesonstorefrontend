import React from 'react'
import { PiShoppingCart } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = ({ cart }) => {

    const location = useLocation();
    return (
        <div className=' bg-zinc-300'>
            <div className='flex justify-between items-center max-w-[1280px] mx-auto h-[70px] px-5'>
                <Link to="/" className='md:text-[24px] font-medium cursor-pointer'>Teson Store</Link>
                <div className='flex justify-between items-center gap-5'>
                    {/* <Link to="/" className={`md:text-[20px] font-normal hidden md:block ${location.pathname === "/" ? "border-b border-black" : ""}`}>Product</Link> */}
                    <Link to="/addtocart" className={`px-4 py-2 relative bg-zinc-400 shadow-md ${location.pathname === "/addtocart" ? "border-b border-black" : ""}`}>
                        <span className='absolute top-0 right-[5px]'>{cart.length === 0 ? "" : cart.length}</span>
                        <PiShoppingCart size={35} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Header