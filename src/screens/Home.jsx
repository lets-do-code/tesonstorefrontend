import React from 'react'
import { useState } from "react";
import Filter from '../components/Filter/Filter';
import SearchFilter from '../components/Filter/SearchFilter';
import ProductCard from '../components/ProductCard/ProductCard';



const Home = ({ apiData, onAddToCart }) => {



    const [searchItem, setSearchItem] = useState('')
    const [activeSection, setActiveSection] = useState('products'); // default to products
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')



    const [filters, setFilters] = useState({
        gender: [],
        color: [],
        priceRange: [],
        type: [],
    });







    const filterItems = (items) => {
        return items.filter((item) => {
            const genderMatch = filters.gender.length === 0 || filters.gender.includes(item.gender);
            const colorMatch = filters.color.length === 0 || filters.color.includes(item.color);
            const typeMatch = filters.type.length === 0 || filters.type.includes(item.type);
            const searchItems = searchItem.length === 0 ? item : item.name.toLowerCase() === searchItem.toLowerCase() || item.color.toLowerCase() === searchItem.toLowerCase() || item.type.toLowerCase() === searchItem.toLowerCase()
            const priceMatch = filters.priceRange.length === 0 || filters.priceRange.some((range) => {
                const [min, max] = range.split("-").map(Number);
                return item.price >= min && item.price <= max;

            });

            return genderMatch && colorMatch && typeMatch && priceMatch && searchItems;

        });
    };



    return (
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 h-screen p-4">
            <div className="flex sm:overflow-y-auto  sm:mb-16 flex-col sec-two max-sm:relative">

                <div className=' max-sm:hidden flex gap-2 my-4 text-[19px] justify-start items-center font-medium max-sm:w-full'>
                    Category
                </div>
                <div className='filterscroll sm:overflow-y-auto'>
                    {isOpen && <div className="w-full max-sm:absolute top-24 z-20 ">
                        <Filter isOpen={isOpen} setIsOpen={setIsOpen} filters={filters} setFilters={setFilters} />
                    </div>}


                    <div className="max-sm:hidden ">
                        <Filter isOpen={isOpen} setIsOpen={setIsOpen} filters={filters} setFilters={setFilters} />
                    </div>
                </div>


            </div>
            <div className="flex flex-col  col-span-1 md:col-span-2 lg:col-span-4 sm:overflow-y-auto">
                <div>
                    <SearchFilter isOpen={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} searchItem={searchItem} setSearchItem={setSearchItem} />
                </div>
                <div className="sm:overflow-y-auto mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
                        {
                            filterItems(apiData).map((product) => (
                                <ProductCard
                                    key={product.id}
                                    data={product}
                                    onAddToCart={() => onAddToCart(product)}
                                />

                            ))
                        }
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Home