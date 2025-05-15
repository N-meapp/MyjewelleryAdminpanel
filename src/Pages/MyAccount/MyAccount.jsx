import React, { useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import Overview from "../../Layout/MyAccount/Overview";
import Wishlist from "../../Layout/MyAccount/Wishlist";
import DetailsNavbar from "../../Layout/ProductDetail/DetailsNavbar";
import PersonalDetails from "../../Layout/MyAccount/PersonalDetails";
import { AccountMobileView } from "../../Layout/Navbar/subMobileNav";


const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <div><Overview /></div>;
            case 'personaldetails':
                return <div><PersonalDetails /></div>;
            case 'whishlist':
                return <div><Wishlist /></div>;

            default:
                return <div>Select a menu item to see the content.</div>;
        }
    };

    return (
        <> <div className="md:block hidden"> <Navbar /></div>
            <AccountMobileView/>

            <div className="md:px-[100px] md:py-[70px]">
                <div className="md:flex md:h-[100%] ">
                    {/* Sidebar */}
                    <div
                        className={`${isSidebarOpen ? "md:w-64" : "w-20"
                            }  md:pt-[100px] md:text-white text-[#474141] flex flex-col transition-all duration-300 ease-in-out relative top-[320px] md:top-[0]`}
                    >
                        <div className="flex items-center justify-center md:p-4">
                            <h1 className={`text-[20px] font-[600] text-[#474141] poppins md:block hidden  ${isSidebarOpen ? "block" : "hidden"}`}>My Account</h1>
                        </div>

                        <nav className="flex-1 mx-8 items-center  ">
                            <ul className="md:space-y-4 flex md:block md:text-[16px] text-[14px] overflow-x-auto md:overflow-visible pb-2 gap-7 md:gap-0 whitespace-nowrap no-scrollbar">
                                <li
                                    onClick={() => setActiveTab("overview")}
                                    className={`flex items-center flex-col justify-center cursor-pointer gap-4 md:hover:bg-[#896a61] md:hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins relative group ${activeTab === "overview"
                                        ? "md:text-[#fff] md:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:bg-[#56433d] rounded-xl"
                                        : "md:text-[#474141]"
                                        }`}
                                >
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Overview</span>
                                    <div
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#6B3535] transform transition-transform duration-300 ease-in-out md:hidden ${activeTab === "overview" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></div>
                                </li>

                                <li
                                    onClick={() => setActiveTab("personaldetails")}
                                    className={`flex items-center flex-col justify-center cursor-pointer gap-4 md:hover:bg-[#83665d] md:hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins relative group ${activeTab === "personaldetails"
                                        ? "md:text-[#fff] md:border-indigo-500 md:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:bg-[#56433d] rounded-xl"
                                        : "md:text-[#474141]"
                                        }`}
                                >
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Personal Details</span>
                                    <div
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#6B3535] transform transition-transform duration-300 ease-in-out md:hidden ${activeTab === "personaldetails" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></div>
                                </li>

                                <li
                                    onClick={() => setActiveTab("whishlist")}
                                    className={`flex items-center flex-col justify-center cursor-pointer gap-4 md:hover:bg-[#83665d] md:hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins relative group ${activeTab === "whishlist"
                                        ? "md:text-[#fff] md:border-indigo-500 md:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] md:bg-[#56433d] rounded-xl"
                                        : "md:text-[#474141]"
                                        }`}
                                >
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Wishlist</span>
                                    <div
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#6B3535] transform transition-transform duration-300 ease-in-out md:hidden ${activeTab === "whishlist" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></div>
                                </li>


                            </ul>

                        </nav>
                        <hr className='border border-[#b3b3b3] max-w-lg mt-[-10px] md:hidden ' />
                    </div>

                    {/* Header */}
                    <div className="flex-1 flex flex-col">
                        <main className="flex-1 p-6">{renderContent()}</main>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};


export default MyAccount;