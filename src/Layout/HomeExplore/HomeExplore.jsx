import React from 'react'

const HomeExplore = () => {
    return (
        <div >
            <div className='pt-[130px] pb-[150px]'>
                <h3 className='text-center text-[#2f2421] text-[30px] alice'>Explore Our Finest Creations</h3>
                <h5 className='text-center text-[18px] text-[#70695d] instrument-san font-[500]'>Discover unique designs and premium craftsmanship in our latest collection.</h5>

                <div className="px-[80px] mt-[40px] space-y-20">

                    {/* First row (5 items) */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p1.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px] font-[500]">Ear Cuff</p>
                        </div>

                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p2.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Earrings</p>
                        </div>

                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p3.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Rings</p>
                        </div>

                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p4.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Watch</p>
                        </div>

                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p5.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Ear Cuff</p>
                        </div>
                    </div>

                    {/* Second row (centered) */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-10">
                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p5.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Nose Pin</p>
                        </div>
                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] cursor-pointer overflow-hidden">
                                <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="/public/assets/Images/products/p6.png" />
                            </div>
                            <p className="text-[#563a14] text-[16px] text-center bolkit mt-[7px]">Nose Pin</p>
                        </div>

                        <div className="coll h-[284px]">
                            <div className="card w-full h-[254px] border border-[#d2b48c] bg-[#d2b48c] relative overflow-hidden">
                                <img className="w-full h-full object-cover invisible" src="/public/assets/Images/products/p1.png" />
                                <p className="text-[#513535] text-[16px] text-center bolkit absolute inset-0 flex items-center justify-center">
                                    View More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default HomeExplore