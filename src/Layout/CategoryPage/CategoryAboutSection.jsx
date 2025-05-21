import { useEffect, useState } from "react";
import { womensCategory, mensCategory, kidsCategory } from "../../constants/category";

export default function CategoryAboutSection({ selectedCategory }) {
    // console.log(selectedCategory,'selectedCategories');
    const [categoryData, setCategoryData] = useState(womensCategory)
    useEffect(() => {
        if (selectedCategory === 2) {
            setCategoryData(womensCategory)
        } else if (selectedCategory === 1) {
            setCategoryData(mensCategory)
        } else if (selectedCategory === 3) {
            setCategoryData(kidsCategory)
        }
    }, [selectedCategory])
    return (
        <>
            <div className="flex items-center justify-center mx-auto mt-[-100px] md:mt-[131px] h-[536px] w-[80%] md:w-[59%] gap-[16px] md:gap-[24px]">
                <div className="flex-1 content-center">
                    <h1 className="text-[12px] md:text-[30px] font-bold h-[46px] bolkit">{categoryData.heading}</h1>
                    <h2 className="md:text-[15px] text-[7px] text-[#6F6565] poppins mt-[-25px] md:mt-0">{categoryData.description}</h2>
                    <button className="bg-[#C5A984] md:w-[153px] w-[64px] md:h-[43px] h-[18px] md:rounded-lg rounded-[3px] md:text-[15px] text-[6px] md:mt-[24px] font-semibold text-black poppins">
                        Explore
                    </button>
                </div>
               <div className="w-[113px] h-[201px] md:h-auto md:max-h-[700px] max-h-[300px] md:w-auto object-cover  md:rounded-[4px]">
                 <img
                    className=""
                    src={categoryData.video}
                    alt="category preview"
                />
               </div>
            </div>

        </>
    )
}