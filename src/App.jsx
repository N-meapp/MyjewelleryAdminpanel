import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Pages/Category/Categories";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}