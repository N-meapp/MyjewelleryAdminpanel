import React, { useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";
import Overview from "../../Layout/MyAccount/Overview";
import Wishlist from "../../Layout/MyAccount/Wishlist";


const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <div><Overview /></div>;
            case 'products':
                return <div>fqegfeqg</div>;
            case 'costumers':
                return <div>aaa</div>;
            case 'orders':
                return <div><Wishlist /></div>;
            case 'category':
                return <div>tt</div>;
            case 'enquiry':
                return <div>fdf</div>;
            case 'slider_ad':
                return <div>ww</div>;
            case 'settings':
                return <div>Change your Settings here.</div>;
            case 'logout':
                return <div>You have logged out!</div>;
            default:
                return <div>Select a menu item to see the content.</div>;
        }
    };

    return (
        <>
            <Navbar />
            <div className="px-[100px] py-[70px]">
                <div className="flex h-[100%]">
                    {/* Sidebar */}
                    <div
                        className={`${isSidebarOpen ? "w-64" : "w-20"
                            }  pt-[100px] text-white flex flex-col transition-all duration-300 ease-in-out`}
                    >
                        <div className="flex items-center justify-center p-4">
                            <h1 className={`text-[20px] font-[600] text-[#474141] poppins  ${isSidebarOpen ? "block" : "hidden"}`}>My Account</h1>
                        </div>

                        <nav className="flex-1 mx-8 items-center">
                            <ul className="space-y-4">
                                <li onClick={() => setActiveTab('dashboard')} className={`flex items-center flex-col justify-center cursor-pointer gap-4 hover:bg-[#896a61] hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins ${activeTab === 'dashboard' ? 'text-[#fff]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#56433d] rounded-xl' : 'text-[#474141]'
                                    }`}>
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Overview</span>
                                </li>

                                <li onClick={() => setActiveTab('products')} className={`flex items-center flex-col  justify-center cursor-pointer gap-4 hover:bg-[#83665d] hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins ${activeTab === 'products' ? 'text-[#fff] border-indigo-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#56433d] rounded-xl' : 'text-[#474141]'
                                    }`}>
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Personal Details</span>
                                </li>

                                <li onClick={() => setActiveTab('orders')} className={`flex items-center flex-col  justify-center cursor-pointer gap-4 hover:bg-[#83665d] hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins ${activeTab === 'orders' ? 'text-[#fff] border-indigo-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#56433d] rounded-xl' : 'text-[#474141]'
                                    }`}>
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Wishlist</span>
                                </li>

                                <li onClick={() => setActiveTab('category')} className={`flex items-center flex-col  justify-center cursor-pointer gap-4 hover:bg-[#83665d] hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins ${activeTab === 'category' ? 'text-[#fff] border-indigo-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#56433d] rounded-xl' : 'text-[#474141]'
                                    }`}>
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Order history</span>
                                </li>
                                <li onClick={() => setActiveTab('enquiry')} className={`flex items-center flex-col  justify-center cursor-pointer gap-4 hover:bg-[#83665d] hover:text-[#ffffff] transition ease-in-out duration-300 p-2 rounded-xl poppins ${activeTab === 'enquiry' ? 'text-[#fff] border-indigo-500 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#56433d] rounded-xl' : 'text-[#474141]'
                                    }`}>
                                    <span className={isSidebarOpen ? "block" : "hidden"}>Edit details</span>
                                </li>
                            </ul>
                        </nav>

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