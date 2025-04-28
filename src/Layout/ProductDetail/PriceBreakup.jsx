import React from 'react'

const PriceBreakup = () => {
    return (
        <div>

            <div className='px-[300px] py-[100px]'>
                <p className='text-center text-[#4f4542] text-[20px] bolkit font-[600]'>Price Breakup</p>

                {/* Apply overflow-hidden here */}
                <div className="relative overflow-x-auto mt-9 px-[0px] py-[0px] rounded-[26px] overflow-hidden border border-[#e0e0e0]">
                    <table className="w-full text-sm text-left rtl:text-right text-[#636161] poppins dark:text-gray-400">
                        <thead className="text-[14px] poppins font-[500] text-[#acacac] bg-[#fff] py-4">
                            <tr className='border-b border-gray-300'>
                                <th scope="col" className="px-6 py-4 font-[500]">PRODUCT DETAILS</th>
                                <th scope="col" className="px-6 py-4 font-[500]">RATE</th>
                                <th scope="col" className="px-6 py-4 font-[500]">WEIGHT</th>
                                <th scope="col" className="px-6 py-4 font-[500]">DISCOUNT</th>
                                <th scope="col" className="text-right px-5  font-[500]">VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-300">
                                <th scope="row" className="px-6 py-4 flex gap-2">
                                    <img className='w-[50px] h-[50px] object-contain' src='/public/assets/Images/ProductDetails/goldbar.png' />
                                    <div className='w-fit'>
                                        <p className='text-[14px] poppins font-medium text-gray-900'>Yellow Gold</p>
                                        <p className='text-[14px] poppins font-[400]  text-[#636161] text-center'>18KT</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4"><p className=' text-[]'>₹ 6745.91/g</p></td>
                                <td className="px-6 py-4">0.857g</td>
                                <td className="px-6 py-4">_</td>
                                <td className="text-right px-4 py-4">₹ 5779.9</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-300">
                                <th scope="row" className="px-6 py-4 flex gap-2">
                                    <img className='w-[50px] h-[50px] object-contain' src='/public/assets/Images/ProductDetails/silverbar.png' />
                                    <div className='w-fit'>
                                        <p className='text-[14px] poppins font-medium text-gray-900'>Stone</p>
                                        {/* <p className='text-[14px] poppins font-[400]  text-[#636161] text-center'>18KT</p> */}
                                    </div>
                                </th>
                                <td className="px-6 py-4"><p className=' text-[]'>_</p></td>
                                <td className="px-6 py-4">0.226 ct/0.045g</td>
                                <td className="px-6 py-4">-</td>
                                <td className="text-right px-4 py-4">₹ 24353.6</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium text-[#636161]">
                                    Making Charges
                                </th>
                                <td className="px-6 py-4">_</td>
                                <td className="px-6 py-4">_</td>
                                <td className="px-6 py-4">_</td>
                                <td className="text-right px-4 py-4">₹ 9989.00</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium text-[#636161]">
                                    Sub Total
                                </th>
                                <td className="px-6 py-4">_</td>
                                <td className="px-6 py-4">0.902g Gross Wt.</td>
                                <td className="px-6 py-4">_</td>
                                <td className="text-right px-4 py-4">₹ 40122.50</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 border-b border-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium text-[#636161]">
                                    Making Charges
                                </th>
                                <td className="px-6 py-4">_</td>
                                <td className="px-6 py-4">_</td>
                                <td className="px-6 py-4">_</td>
                                <td className="text-right px-4 py-4">₹ 1203.68</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='w-full px-[15px] py-[20px] flex justify-between bg-[#f2f1f1]'>
                        <div><p className='text-[16px] poppins font-[500]'>Grand Total</p></div>
                        <div><p className='text-[16px] poppins font-[500]'>₹ 41326</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PriceBreakup