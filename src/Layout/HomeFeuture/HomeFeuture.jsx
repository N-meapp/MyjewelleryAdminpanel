import React from 'react'

const HomeFeuture = () => {
    return (
        <div  style={{
            borderTop: '2px dashed transparent',
            borderBottom: '2px dashed transparent',
            borderImageSource: 'repeating-linear-gradient(to right, #d2b48c 0px, #d2b48c 18px, transparent 18px, transparent 40px)',
            borderImageSlice: 1,
            borderImageRepeat: 'stretch',
            width: '100%',
          }} className='bg-[#f9f9f9] p-12'>
            <div className="w-full flex flex-wrap">
                <div className="w-4/12">
                    <div>
                        <p className='text-[50px] text-[#563a14] text-center flex alice pl-2'>My Jewelry <br /> my Designs</p>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center p-3'>
                            <p className='text-[13.87px] text-[#56433d] instrument-san text-center font-semibold'>24 X 7 Search</p>
                            <svg className='mt-1.5 mb-1.5' xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24">
                                <path fill="none" stroke="#c8983e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20" />
                            </svg>
                            <p className='text-[#56433d] text-[13px] text-center instrument-san font-[500]'>Search Products anytime 24 X 7 throughout the year.</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center p-3'>
                            <p className='text-[13.87px] text-[#56433d] instrument-san text-center font-[600]'>Custom Requests</p>
                            {/* <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24">
                                <path fill="none" stroke="#c8983e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20" />
                            </svg> */}
                            <img className='w-[41px] h-[41px] mt-1.5 mb-1.5' src='/public/assets/Images/feutuers/f1.png' />
                            <p className='text-[#56433d] text-[13px] text-center instrument-san font-[500]'>Connect with expert jewelers to create personalized designs</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center p-3'>
                            <p className='text-[13.87px] text-[#56433d] instrument-san text-center font-[600]'> Latest Designs</p>
                            {/* <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24">
                                <path fill="none" stroke="#c8983e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20" />
                            </svg> */}
                             <img className='w-[41px] h-[41px] mt-1.5 mb-1.5' src='/public/assets/Images/feutuers/f2.png' />
                            <p className='text-[#56433d] text-[13px] text-center instrument-san font-[500]'>designs that reflect the latest trends of the modern era.</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center p-3'>
                            <p className='text-[13.87px] text-[#56433d] instrument-san text-center font-[600]'>Latest Designs</p>
                            {/* <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24">
                                <path fill="none" stroke="#c8983e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20" />
                            </svg> */}
                            <img className='w-[41px] h-[41px] mt-1.5 mb-1.5' src='/public/assets/Images/feutuers/f2.png' />
                            <p className='text-[#56433d] text-[13px] text-center instrument-san font-[500]'>designs that reflect the latest trends of the modern era.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeFeuture