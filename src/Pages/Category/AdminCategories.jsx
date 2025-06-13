// import logo from ''
// import profile from '../assets/Images/profile/profile-1.jpg'

import { useEffect, useState } from "react";
import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";
import ProductCard from "../../Components/Cards/ProductCard";
import SecondarySearch from "../../Components/Inputs/SecondarySearch";
import { womensCategory,kidsCategory,mensCategory } from "../../constants/category";
import { mens,womens,kids } from "../../constants/categorySub";
// import { golds } from "../../constants/products";
import CategoryAboutSection from "../../Layout/CategoryPage/CategoryAboutSection";
import CategoryHeader from "../../Layout/CategoryPage/CategoryHeader";
import CategoryProductsListing from "../../Layout/CategoryPage/CategoryProductsListing";
import CategoryListing from "../../Layout/CategoryPage/CategoryProductsListing";
import RelatedProducts from "../../Layout/CategoryPage/RelatedProducts";
import CategoryList from "../../Components/CategoryList/CategoryList";
import Footer from "../../Layout/Footer/Footer";


export default function Categories() {
    const[selectedCategory,setSelectedCategory]=useState(womens)
    
    return (
        <>

            <CategoryHeader setSelectedCategory={setSelectedCategory} settselectedCategory={selectedCategory} />
            <SecondarySearch />

            {/* <CategoryList cateNav={'w-full px-[100px] mt-[20px]'}/> */}

            {/* <CategoryProductsListing list={golds} /> */}
            <CategoryProductsListing selectedCategory={selectedCategory} />
            
            <CategoryAboutSection selectedCategory={selectedCategory} />
            <RelatedProducts />
            <Footer/>

        </>
    )
}


