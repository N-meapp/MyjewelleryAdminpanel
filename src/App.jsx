import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Pages/Category/Categories";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Login from "./Pages/Login/Login";
import { OTPLogin } from "./Pages/Login/OTPLogin";
import Admin from "../../MyJewelryFrontEnd - Copy/src/Pages/Admin/Admin";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
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