import React from 'react'


const WishlistCard = ({ img, productName, unitPrize, StockStatus, stockCss }) => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-2 w-full py-4 bg-[#f5f5f5] rounded-xl mb-4'>
                <div className='col-span-12 md:col-span-2'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 md:col-span-2 h-full flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" /><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314" /></g></mask></defs><path fill="#474141" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)" /></svg>
                        </div>
                        <div className='col-span-12 md:col-span-10'>
                            <div className='cardd shadow-md pl-[5px] pr-[5px]  bg-[#fff] w-fit rounded-[10px] relative'>
                                <img className=' rounded-[10px] pb-1 pt-[5px]' src={img} />
                                <p className='poppinse font-[500] text-[12px] text-[#474141] text-center pb-2'>View more</p>
                                <hr className='w-[60px] border border-[#cdc7c5] absolute bottom-[5px] left-[29%]' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-12 md:col-span-6 flex items-center'>
                    <p className='bolkit text-[17px] font-[700] text-[#474141]'>{productName}</p>
                </div>
                <div className='col-span-12 md:col-span-2 flex items-center'>
                    <p className='robo text-[13px] text-[#9a8f8c] font-[700]'>₹ {unitPrize}</p>
                </div>
                <div className='col-span-12 md:col-span-2 flex items-center'>
                    <p className={stockCss}>{StockStatus}</p>
                </div>
            </div>
        </div >
    )
}

export default WishlistCard