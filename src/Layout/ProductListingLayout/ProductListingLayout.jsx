import React, { useState, useEffect, useRef } from "react";
import './ProductListingLayout.css'
import ProductCard from "../../Components/Cards/ProductCard";

const ProductListingLayout = ({ list }) => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(50000);
    const priceGap = 5000;
    const maxRange = 100000;
    const progressRef = useRef();
    const colors = ['Gold', 'Rose Gold', 'Silver'];
    const stone = ["Diamond", "White stone", "Silver stone", "Hemitate stone"];
    const colorsCode = [
        { name: 'Black', code: '#000000' },
        { name: 'White', code: '#f3ebea' },
        { name: 'Red', code: '#c62828' },
        { name: 'Blue', code: '#1a144f' },
    ];

    const [filter, setFilter] = useState(true)
    console.log(filter, "yyyy");


    const handleMinChange = (e) => {
        const value = parseInt(e.target.value);
        if (maxValue - value >= priceGap) setMinValue(value);
    };

    const handleMaxChange = (e) => {
        const value = parseInt(e.target.value);
        if (value - minValue >= priceGap) setMaxValue(value);
    };

    const handleRangeChange = (e, type) => {
        const value = parseInt(e.target.value);
        if (type === "min") {
            if (maxValue - value >= priceGap) setMinValue(value);
        } else {
            if (value - minValue >= priceGap) setMaxValue(value);
        }
    };

    useEffect(() => {
        const minPercent = (minValue / maxRange) * 100;
        const maxPercent = (maxValue / maxRange) * 100;
        if (progressRef.current) {
            progressRef.current.style.left = `${minPercent}%`;
            progressRef.current.style.right = `${100 - maxPercent}%`;
        }
    }, [minValue, maxValue]);




    return (
     <div className="transition-all duration-500 ease-in-out">
  {!filter && (
    <button
      onClick={() => setFilter(true)}
      type="button"
      className="bg-[#fafafa] border border-none focus:outline-none hover:bg-[#eeeeee] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 mt-2 transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="#563a14"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
        />
      </svg>
    </button>
  )}

  <div className="grid grid-cols-12 gap-1 w-full transition-all duration-500 ease-in-out">
    {/* Left Sidebar */}
    {filter && (
      <div
        className={`col-span-12 md:col-span-3 px-4 pt-1 border-r-2 border-[#e0dbdb] transform transition-all duration-500 ease-in-out ${
          filter ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div>
          {/* Back Button */}
          <button
            onClick={() => setFilter((prev) => !prev)}
            type="button"
            className="bg-[#fafafa] border border-none focus:outline-none hover:bg-[#f6f6f6] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#563a14"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 12.013L3.211 12m6.777 7L3 12l6.988-7"
              />
            </svg>
          </button>

          {/* Categories */}
          <div>
            <div className="bg-[#f4f4f4] w-full p-3 flex justify-center items-center">
              <p className="text-[#7d6a4f] text-[19px] font-[500] poppins">SHOP BY CATEGORIES</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="mt-4 space-y-1 transition-opacity duration-300">
                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Ball Chain / Bead Chain</p>
                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Rolo Chain</p>
                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Curb Chain</p>
                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Rope Chain</p>
                <p className="text-[#85602e] text-[15px] leading-[25px] cursor-pointer hover:text-[#c38b43]">Wheat Chain</p>
              </div>
            </div>
          </div>

          {/* Add transition to all your inner filter panels similarly */}
          {/* PRICE, BRAND, MATERIAL, STONES, etc. can keep same content and just wrap inner sections in transition classes if needed */}
     {/* Price Filter */}
     <div>
                            <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                                <p className="text-[#563a14] text-[15px] font-[500] poppins">PRICE</p>
                                <a className="text-[#85602e]" href="#">Any Price</a>
                            </div>

                            <div className="w-full max-w-xl mx-auto p-6">
                                {/* Price Tooltips */}
                                <div className="relative mb-12">
                                    <div
                                        className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2"
                                        style={{ left: `${(minValue / maxRange) * 100}%` }}
                                    >
                                        {minValue}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
                                    </div>
                                    <div
                                        className="absolute bg-[#7B5725] text-white font-semibold text-sm px-4 py-1 rounded-md left-0 transform -translate-x-1/2"
                                        style={{ left: `${(maxValue / maxRange) * 100}%` }}
                                    >
                                        {maxValue}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7B5725] rotate-45 bottom-[-6px]" />
                                    </div>
                                </div>

                                {/* Slider Track */}
                                <div className="relative h-[4px] bg-[#dddddd] rounded">
                                    <div ref={progressRef} className="absolute h-full bg-[#7B5725] rounded"></div>

                                    {/* Slider Inputs */}
                                    <input
                                        type="range"
                                        min="0"
                                        max={maxRange}
                                        value={minValue}
                                        onChange={(e) => handleRangeChange(e, "min")}
                                        className="range-thumb w-full absolute top-[-6px] appearance-none pointer-events-auto bg-transparent"
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max={maxRange}
                                        value={maxValue}
                                        onChange={(e) => handleRangeChange(e, "max")}
                                        className="range-thumb w-full absolute top-[-6px] appearance-none pointer-events-auto bg-transparent"
                                    />
                                </div>

                                {/* Input Fields */}
                                <div className="flex items-center justify-center gap-2 mt-10">
                                    <input
                                        type="number"
                                        value={minValue}
                                        onChange={handleMinChange}
                                        className="border border-[#7B5725] text-[14px] w-24 px-4 py-2 text-center font-semibold text-[#7B5725]"
                                    />
                                    <span className="text-[#7B5725] text-xl">–</span>
                                    <input
                                        type="number"
                                        value={maxValue}
                                        onChange={handleMaxChange}
                                        className="border border-[#7B5725] w-24 text-[14px] px-4 py-2 text-center font-semibold text-[#7B5725]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                                <p className="text-[#563a14] text-[15px] font-[500] poppins">BRAND</p>
                            </div>

                            <p className="text-[#534634] text-[15px] instrument-san px-10 mt-5">my jewelry my design</p>
                        </div>

                        <div className="">
                            <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                                <p className="text-[#563a14] text-[15px] font-[500] poppins">MATERIAL</p>
                            </div>

                            <div className="font-sans text-[#5c3b00] text-base pl-10 pt-6">
                                {colors.map((color) => (
                                    <label key={color} className="flex items-center mb-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px]  after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden"
                                        />
                                        {color}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                                <p className="text-[#563a14] text-[15px] font-[500] poppins">STONES</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap pl-4 mt-5">
                                    {stone.map((item) => (
                                        <div key={item} className="px-4 py-[1px] mr-2 mb-2 border border-[#d2b48c] font-[600]">
                                            <p className="text-[#563a14] text-[15px]">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="mb-[50px]">
                            <div className="bg-[#f4f4f4] w-full py-3 px-11 flex justify-between items-center mt-8">
                                <p className="text-[#563a14] text-[15px] font-[500] poppins">STONES</p>
                            </div>

                            <div className="font-sans text-base text-black space-y-2 pl-6 pt-5">
                                {colorsCode.map((color) => (
                                    <label key={color.name} className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 mr-2 border border-[#d7b18f] appearance-none checked:bg-[#d7b18f] checked:border-[#d7b18f] relative after:content-['✓'] after:absolute after:top-[1px] after:left-[3px]  after:text-white after:text-sm after:leading-none after:font-bold checked:after:block after:hidden"
                                        />
                                        <span
                                            className="w-4 h-4 mr-2 inline-block"
                                            style={{ backgroundColor: color.code }}
                                        />
                                        <span className="text-[15px] font-medium flex ">{color.name}</span>
                                    </label>
                                ))}
                            </div>

                        </div>
        </div>
      </div>
    )}

    {/* Right Content Area */}
    <div
      className={`transition-all duration-500 ease-in-out ${
        filter
          ? 'col-span-6 md:col-span-9 px-[40px] py-[40px]'
          : 'col-span-12 md:col-span-12 px-[40px] py-[40px]'
      }`}
    >
      <div>
        <p
          className={`text-[20px] text-[#46322c] alice transition-all duration-500 ${
            filter ? '' : 'px-[80px]'
          }`}
        >
          Chains
        </p>

        <div
          className={`h-full mt-[20px] grid gap-[14px] transition-all duration-500 ${
            filter ? 'grid-cols-3 w-fit' : 'grid-cols-4 w-full px-[80px]'
          }`}
        >
          {list.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default ProductListingLayout