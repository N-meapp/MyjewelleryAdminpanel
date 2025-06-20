import { useState } from "react";
import BoardSection from "../../Layout/Admin/DashBoard/BoardSection";
import SearchBar from "../../Layout/Admin/SearchBar/SearchBar";
import SideBar from "../../Layout/Admin/SideBar/SideBar";
import DashBoard from "../../Layout/Admin/DashBoard/DashBoard";
import Products from "../../Layout/Admin/Products/Products";
import Header from "../../Layout/Admin/Header/Header";
import Categories from "../Category/AdminCategories";
import AdminCategories from "../../Layout/Admin/Categories/Categories";
import UsersList from "../../Layout/Admin/UsersList/UsersList";

export default function Admin() {

    const [isShrink, setIsShrink] = useState(false)
    const [selectedTab, setSelectedTab] = useState('Dashboard')


    return (
        <>
            <div className="poppins flex">
                <SideBar isShrink={isShrink} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                <div className={`w-full h-screen px-8 bg-[#f8f9fa] ${isShrink ? 'ml-[6%]' : 'ml-[15%]'} transition-all duration-150 flex flex-col`}>
                    <SearchBar isShrink={isShrink} setIsShrink={setIsShrink} />
                    {selectedTab == 'Dashboard' ?
                        <DashBoard />
                        : selectedTab == 'Products' ?
                            <Products />
                            : selectedTab == 'Categories' ?
                                <AdminCategories />
                                :selectedTab == 'Users' ?
                                <UsersList />
                                : selectedTab == 'Header' ?
                                    <Header /> :
                                    <></>
                    }
                </div>
            </div>
        </>
    )
}