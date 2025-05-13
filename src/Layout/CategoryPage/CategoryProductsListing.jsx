    import { useEffect, useState } from "react";
    import ProductCard from "../../Components/Cards/ProductCard"
    import { kids, mens, womens } from "../../constants/categorySub";
    import LoadMoreButton from "../../Components/Buttons/LoadMoreButton";


    export default function CategoryProductsListing({selectedCategory,list}){
        // console.log(selectedCategory,'selected category');

        const [categoryData, setCategoryData] = useState(womens)

        useEffect(()=>{
        if(selectedCategory === "Mens"){
            setCategoryData(mens)
        }else if(selectedCategory === "Womens"){
            setCategoryData(womens)
        }else if(selectedCategory === "Kids"){
            setCategoryData(kids)
        }
        },[selectedCategory])
        
        return (
            <>
            <div className="h-full w-fit md:mt-[40px] mt-[15px] grid md:grid-cols-3 grid-cols-2 gap-[10px] mx-auto">
                            {categoryData.map((item,index) => {
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