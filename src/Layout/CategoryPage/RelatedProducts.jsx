import { useState, useEffect } from "react";
import SlidingButton from "../../Components/Buttons/SlidingButton";
import ProductCard from "../../Components/Cards/ProductCard";
import RelatedProductCard from "../../Components/Cards/RelatedProductCard";
import { golds } from "../../constants/products";
import { fetchRelatedProductsData } from "../../API/userAPI";

export default function RelatedProducts() {
  const [scrollPosition, setScrollPosition] = useState(200)
  const [relatedProducts, setRelatedProducts] = useState([])
  // console.log(relatedProducts, 'relatedd');

  // Related Products
  useEffect(() => {
    fetchRelatedProductsData((res) => {
      setRelatedProducts(res.products || []);
    });
  }, []);

  const handleScrolling = (position) => {

    const scrollingDiv = document.getElementById('scrolling-div')
    if (position == 'right') {
      scrollingDiv.scrollTo({
        left: scrollPosition, // pixels from the left
        behavior: 'smooth' // makes it smooth
      });
      setScrollPosition(scrollPosition + 200)
    } else {
      scrollingDiv.scrollTo({
        left: -scrollPosition, // pixels from the left
        behavior: 'smooth' // makes it smooth
      });
      setScrollPosition(scrollPosition - 200)

    }
    const isAtEnd = scrollingDiv.scrollLeft + scrollingDiv.clientWidth >= scrollingDiv.scrollWidth - 1;

    console.log(isAtEnd);
    if (isAtEnd) {
      setScrollPosition(200)
    }

  }

  return (
    <>
      <div className="md:mt-[43px] mt-[-65px] text-center lg:w-[70%] w-[88%] mx-auto relative mb-[117px] overflow-hidden">
        <h1 className="md:text-[25px] text-[20px] bolkit font-bold">Related Products</h1>

        <div className="absolute right-0 md:block hidden">
          <SlidingButton handleScrolling={handleScrolling} />
        </div>

        <div id="scrolling-div" className="md:mt-[70px] mt-[10px] overflow-x-auto scrollbar-hidden">
          <div
           className="w-max flex gap-[21px]">
            {relatedProducts.map((item, i) => (
              <RelatedProductCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>


    </>
  )
}