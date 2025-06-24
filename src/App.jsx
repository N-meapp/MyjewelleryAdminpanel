import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Pages/Category/Categories";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import { OTPLogin } from "./Pages/Login/OTPLogin";
import { useState } from "react";
import AdminLogin from "./Pages/Admin/AdminLogin";
import { useSelector } from "react-redux";

export default function App() {

  const admin = useSelector((state) => state.admin.admin);
  console.log(admin,'adddminn');
  




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={admin?<Admin />:<AdminLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OTPLogin" element={<OTPLogin />} />
          <Route path="*" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}