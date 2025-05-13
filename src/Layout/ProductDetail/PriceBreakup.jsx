import React from 'react'
import './PriceBreakup.css'
const PriceBreakup = () => {
    return (
        <div className='mb-[100px] md:mb-0'>

        <div className='md:px-[20%] px-[5px] md:py-[100px] price '>
            <p className='text-center text-[#4f4542] md:text-[20px] text-[15px] bolkit font-[600]'>Price Breakup</p>

            {/* Apply overflow-hidden here */}
            <div className="relative overflow-x-auto md:mt-9 mt-3 px-[0px] py-[0px] md:rounded-[26px] rounded-[10px] overflow-hidden border border-[#e0e0e0]">
                <table className="w-full text-sm md:text-left rtl:text-right text-[#636161] poppins dark:text-gray-400">
                    <thead className="md:text-[14px] text-[6px] poppins font-[500] text-[#acacac] bg-[#fff] md:py-4">
                        <tr className='border-b border-gray-300 text-center'>
                            <th scope="col" className="md:px-6 md:py-4 px-2 font-[500]">PRODUCT DETAILS</th>
                            <th scope="col" className="md:px-6 md:py-4 px-2 font-[500]">RATE</th>
                            <th scope="col" className="md:px-6 md:py-4 px-2 font-[500]">WEIGHT</th>
                            <th scope="col" className="md:px-6 md:py-4 px-2 font-[500]">DISCOUNT</th>
                            <th scope="col" className="md:text-center   font-[500]">VALUE</th>
                        </tr>
                    </thead>
                    <tbody className='text-left'>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-300 ">
                            <th scope="row" className="md:px-6 md:py-4 flex md:gap-2">
                                <img className='md:w-[50px] md:h-[50px] h-[25px] w-[25px]  object-contain' src='/public/assets/Images/ProductDetails/goldbar.png' />
                                <div className='w-fit'>
                                    <p className='md:text-[14px] text-[7px] poppins font-medium text-gray-900 '>Yellow Gold</p>
                                    <p className='md:text-[14px] text-[7px] poppins font-[400]  text-[#636161] text-center'>18KT</p>
                                </div>
                            </th>
                            <td className="md:px-6 md:py-4 "><p className=' md:text-[14px] text-[7px] text-center'>₹ 6745.91/g</p></td>
                            <td className="md:px-6 md:py-4 md:text-[14px] text-[7px] text-center">0.857g</td>
                            <td className="md:px-6 md:py-4  md:text-[14px] text-[7px] text-center">_</td>
                            <td className="md:text-right md:px-4 md:py-4 md:text-[14px] text-[7px] text-center">₹ 5779.9</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-300">
                            <th scope="row" className="md:px-6 md:py-4 flex md:gap-2">
                                <img className='md:w-[50px] md:h-[50px] h-[25px] w-[25px] object-contain' src='/public/assets/Images/ProductDetails/silverbar.png' />
                                <div className='w-fit'>
                                    <p className='md:text-[14px] text-[7px] poppins font-medium text-gray-900 '>Stone</p>
                                    {/* <p className='text-[14px] poppins font-[400]  text-[#636161] text-center'>18KT</p> */}
                                </div>
                            </th>
                            <td className="px-6 py-4"><p className='md:text-[14px] text-[7px] text-center'>_</p></td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">0.226 ct/0.045g</td>
                            <td className="md:px-6 md:py-4  md:text-[14px] text-[7px] text-center">-</td>
                            <td className="md:text-right px-4 py-4 md:text-[14px] text-[7px] text-center">₹ 24353.6</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-[#636161] md:text-[14px] text-[7px]">
                                Making Charges
                            </th>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="md:text-right px-4 py-4 md:text-[14px] text-[7px] text-center">₹ 9989.00</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                            <th scope="row" className="px-6 py-4 md:text-[14px] text-[7px] font-medium text-[#636161]">
                                Sub Total
                            </th>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">0.902g Gross Wt.</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="md:text-right px-4 py-4 md:text-[14px] text-[7px] text-center">₹ 40122.50</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-[#636161] md:text-[14px] text-[7px]">
                                Making Charges
                            </th>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="px-6 py-4 md:text-[14px] text-[7px] text-center">_</td>
                            <td className="md:text-right px-4 py-4 md:text-[14px] text-[7px] text-center">₹ 1203.68</td>
                        </tr>
                    </tbody>
                </table>
                <div className='w-full md:px-[23px] px-[23px] py-[20px] flex justify-between bg-[#f2f1f1]'>
                    <div><p className='md:text-[16px] text-[8px] poppins font-[500] text-center'>Grand Total</p></div>
                    <div><p className='md:text-[16px] text-[8px] poppins font-[500] text-center'>₹ 41326</p></div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default PriceBreakup