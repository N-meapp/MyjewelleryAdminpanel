import React, { useEffect, useState } from 'react'
import { fetchContactdata } from '../../API/userAPI'


const Footer = () => {

    const [contactData, setContactData] = useState([])

    useEffect(() => {
        fetchContactData(setContactData)
    }, [])


    return (
        <footer className="bg-[#f0e3d3] w-full ">
            <div className="px-6 md:px-16 lg:px-24 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mt-[50px] mb-[80px]">
                    {/* Left - Newsletter */}
                    <div className="lg:col-span-6 ">
                        <h4 className="text-[34px] md:text-4xl lg:text-5xl font-bold roboto-flex">
                            Get The Last Information
                        </h4>

                        <div className="w-[80%] md:w-[60%]  h-[56px] md:h-[76px] bg-[#d1c1ad] md:rounded-[22px] rounded-[12px] flex items-center pl-4 pr-2 gap-2 md:gap-4 mt-12">
                            <input
                                type="email"
                                placeholder="Email here"
                                className="bg-transparent flex-1 text-[#555] placeholder:text-[#555] text-base md:text-lg placeholder:font-semibold focus:outline-none"
                            />
                            <button className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-full bg-[#2b2321] flex items-center justify-center hover:scale-105 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 md:w-10 md:h-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Middle - Quick Links */}
                    <div className="lg:col-span-3 flex flex-col md:items-start items-start md:mt-12">
                        <p className="md:text-[20px] text-[20px] font-bold text-[#000000] mb-4">Quick Links</p>
                        <ul className="space-y-2 text-[#423d3d] text-sm font-semibold ">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Categories</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    {/* Right - Contact */}
                    <div className="lg:col-span-3 flex flex-col md:items-start items-center mt-[-216px] md:mt-12 ml-[180px] md:ml-0">
                        <p className="md:text-[20px] text-[20px] font-bold text-[#000000] mb-4">Contact Us</p>

                        <ul className="space-y-2 text-[#423d3d] text-sm ml-[25px] md:ml-0 font-semibold">
                            {contactData.map((item) => (
                                <>
                                <li>{item.number}</li>
                                <li>{item.email}</li>
                                <li>{item.address}</li>
                                </>
                            ))}
                           
                        </ul>

                    </div>
                </div>

                {/* Bottom - Social Icons */}
                <div className="flex justify-center md:justify-end mt-12 md:mr-[100px] gap-4 md:mb-[30px]">
                    {/* Example icons, replace with your SVGs */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#645f59" d="M4 12a8 8 0 1 1 9 7.938V14h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 1 1-1h.5a1 1 0 1 0 0-2H14a3 3 0 0 0-3 3v2H9a1 1 0 1 0 0 2h2v5.938A8 8 0 0 1 4 12m8 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" /></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><path fill="#645f59" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.905 7.864q.005.123.005.244c0 2.5-1.901 5.381-5.379 5.381a5.34 5.34 0 0 1-2.898-.85q.221.026.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.89 1.89 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.38 5.38 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.8 3.8 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.8 3.8 0 0 0 1.086-.299a3.8 3.8 0 0 1-.943.979" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#645f59" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#645f59" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM9 9v6a1 1 0 0 0 1.514.857l5-3a1 1 0 0 0 0-1.714l-5-3A1 1 0 0 0 9 9" /></svg>
                </div>
            </div>
        </footer>
    )
}

export default Footer
