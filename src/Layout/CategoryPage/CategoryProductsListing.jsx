import ProductCard from "../../Components/Cards/ProductCard"

export default function CategoryProductsListing({list}){
    return (
        <>
        <div className="h-full w-fit mt-[40px] grid grid-cols-3 gap-[14px] mx-auto">
                        {list.map((item) => {
                            return (
                                <>
                                    <ProductCard item={item} />
                                </>
                            )
                        })}
        
                    </div>
        </>
    )
}