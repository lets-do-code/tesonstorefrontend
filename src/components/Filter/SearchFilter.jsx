import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const SearchFilter = ({ isOpen, setIsOpen, search, setSearch, setSearchItem }) => {


    const handleButton = () => {
        setIsOpen(!isOpen);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchItem(search);

    };


    return (
        <div className='flex gap-2 justify-center w-full mt-4 mb-3'>
            <form onSubmit={handleSubmit} className='flex gap-2 w-full'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder='Search for products...'
                    className='py-1 outline-none w-full border border-zinc-200 shadow-sm px-2 md:px-5'
                />
                <button
                    type='submit'
                    className='border hover:bg-white bg-gray-900 shadow-sm border-gray-900 transition-all duration-300 hover:text-gray-900 text-white  px-3'
                >
                    <IoMdSearch />
                </button>
                <button
                    type='button'
                    onClick={handleButton}
                    className='sm:hidden border hover:bg-white bg-gray-900 transition-all duration-300 border-gray-900 hover:text-gray-900 text-white  px-3'
                >
                    <CiFilter />
                </button>
            </form>
        </div>
    );
}

export default SearchFilter;