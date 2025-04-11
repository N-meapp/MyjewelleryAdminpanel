// import logo from ''
// import profile from '../assets/Images/profile/profile-1.jpg'

import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";
import ProductCard from "../../Components/Cards/ProductCard";
import SecondarySearch from "../../Components/Inputs/SecondarySearch";
import { womensCategory } from "../../constants/category";
import { golds } from "../../constants/products";
import CategoryAboutSection from "../../Layout/CategoryPage/CategoryAboutSection";
import CategoryHeader from "../../Layout/CategoryPage/CategoryHeader";
import CategoryProductsListing from "../../Layout/CategoryPage/CategoryProductsListing";
import CategoryListing from "../../Layout/CategoryPage/CategoryProductsListing";
import RelatedProducts from "../../Layout/CategoryPage/RelatedProducts";


export default function Categories() {
    return (
        <>

            <CategoryHeader />
            <SecondarySearch />

            <div className="h-[39.8px] w-full bg-[red]">

            </div>

            <CategoryProductsListing list={golds} />
            <LoadMoreButton />
            <CategoryAboutSection details={womensCategory} />
            <RelatedProducts />
            

        </>
    )
}


