import React from 'react';
import { popularProducts, popularSearches } from '../../constants/popularSearches';

const SearchLayout = () => {
    return (
        <div className="absolute h-screen w-screen left-[-450px] z-10 overflow-hidden  ">

            <div className="absolute inset-0  backdrop-blur-lg z-0 pointer-events-none " ></div>

            <div className="absolute h-[65vh] left-[450px] z-10 shadow-3xl w-[100vh] bg-white rounded-[30px] p-5 overflow-y-auto scroll-hidden">

                {/* Popular Searches */}
                <div className="flex flex-col gap-4 mb-6">
                    <h1 className="text-lg text-[#2f2421] alice">Popular Searches</h1>
                    <div className="flex gap-2 flex-wrap ">
                        {popularSearches.map((item, index) => (
                            <p
                                key={index}
                                className="border metamorphous-regular flex text-[#563a14] border-[#d9d1d1] gap-1 rounded-[8px] px-4 py-1 text-[11px] cursor-pointer hover:bg-gray-100 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-[-6px] text-[#56433D]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25L9 11.25L13.5 15.75L21 8.25" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25H15.75" />
                                </svg>


                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Popular Products */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg text-[#2f2421] alice">Trending Products</h1>
                    <div className="flex gap-4 flex-wrap">
                        {popularProducts.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-[100px] cursor-pointer transform transition duration-300 ease-in-out 
                                hover:scale-110 hover:shadow-xl hover:rounded-md "
                            >
                                <img
                                    className="w-[100px] h-[100px] object-cover "
                                    src={item.images}
                                    alt=""
                                />
                                <p className="text-[8px] text-center mt-1 text-[#563a14] metamorphous-regular">
                                    {item.head}
                                </p>
                            </div>

                        ))}
                    </div>
                </div>
                {/* Popular Products */}
                <div className="flex flex-col gap-4 mt-[40px]">

                    <div className="flex gap-4 flex-wrap">
                        <img className='h-[30vh] w-[100vh] rounded-[10px] contrast-75' src="\public\assets\Images\header\Gold Header.jpg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchLayout;
