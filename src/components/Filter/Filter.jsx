import React, { useState } from 'react';

const Filter = ({ isOpen, setIsOpen, filters, setFilters }) => {
    const [tempFilters, setTempFilters] = useState(filters);

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;

        setTempFilters((prevFilters) => {
            const updatedFilter = prevFilters[name];
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...updatedFilter, value],
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: updatedFilter.filter((filterValue) => filterValue !== value),
                };
            }
        });
    };

    const handleApplyFilters = () => {
        setIsOpen(false)
        setFilters(tempFilters);
    };

    return (
        <div className="p-4 flex flex-col gap-5 max-sm:border bg-white shadow-md border">
            <div className="">
                <label className="block mb-2">Price</label>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="0-250"
                        checked={tempFilters.priceRange.includes("0-250")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Rs 0 - 250</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="251-300"
                        checked={tempFilters.priceRange.includes("251-300")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Rs 251 - 450</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="priceRange"
                        value="301-600"
                        checked={tempFilters.priceRange.includes("301-600")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Rs 450</label>
                </div>
            </div>
            <div className="">
                <label className="block mb-2">Color</label>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="White"
                        checked={tempFilters.color.includes("White")}
                        onChange={handleCheckboxChange}
                    />
                    <label>White</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Black"
                        checked={tempFilters.color.includes("Black")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Black</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Grey"
                        checked={tempFilters.color.includes("Grey")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Grey</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Blue"
                        checked={tempFilters.color.includes("Blue")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Blue</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Green"
                        checked={tempFilters.color.includes("Green")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Green</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Red"
                        checked={tempFilters.color.includes("Red")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Red</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Pink"
                        checked={tempFilters.color.includes("Pink")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Pink</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Purple"
                        checked={tempFilters.color.includes("Purple")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Purple</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="color"
                        value="Yellow"
                        checked={tempFilters.color.includes("Yellow")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Yellow</label>
                </div>
            </div>
            <div className="">
                <label className="block mb-2">Type</label>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="type"
                        value="Basic"
                        checked={tempFilters.type.includes("Basic")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Basic</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="type"
                        value="Polo"
                        checked={tempFilters.type.includes("Polo")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Polo</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="type"
                        value="Hoodie"
                        checked={tempFilters.type.includes("Hoodie")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Hoodie</label>
                </div>
            </div>
            <div className="">
                <label className="block mb-2">Gender</label>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="gender"
                        value="Women"
                        checked={tempFilters.gender.includes("Women")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Women</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input
                        type="checkbox"
                        name="gender"
                        value="Men"
                        checked={tempFilters.gender.includes("Men")}
                        onChange={handleCheckboxChange}
                    />
                    <label>Men</label>
                </div>
            </div>
            <div className='flex justify-end'>
                <button
                    className='bg-gray-900 border border-gray-900 hover:bg-white transition-all duration-300 hover:text-gray-900 px-4 py-1 rounded-full text-white text-[14px]'
                    onClick={handleApplyFilters}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default Filter;
