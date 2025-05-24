import { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard"
import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";
import { fetchProductsDataByGender } from "../../API/userAPI";


export default function CategoryProductsListing({ selectedCategory,searchTerm,searchResult }) {
    
    const [productData, setProductData] = useState([])
 

    useEffect(() => {
        if (selectedCategory && !searchTerm ) {
            fetchProductsDataByGender(selectedCategory, setProductData);
        }
    }, [selectedCategory,searchTerm]);

      const productsToDisplay = searchTerm ? searchResult : productData;
     
      

    return (
        <>
            <div className="h-full w-fit md:mt-[40px] mt-[15px] grid md:grid-cols-3 grid-cols-2 gap-[10px] mx-auto">
                {productsToDisplay.map((item, index) => {
                    return (
                        <>
                            <ProductCard key={index} item={item} />

                        </>
                    )
                })}

            </div>
            <LoadMoreButton />
        </>
    )
}