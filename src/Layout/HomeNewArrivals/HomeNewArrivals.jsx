
import { useState } from "react";
import SlidingButton from "../../Components/Buttons/SlidingButton";
import ProductCard from "../../Components/Cards/ProductCard";
import RelatedProductCard from "../../Components/Cards/RelatedProductCard";
import { golds } from "../../constants/products";

export default function HomeNewArrivals() {

  const [scrollPosition, setScrollPosition] = useState(400)


  const handleScrolling = (position) => {

    const scrollingDiv = document.getElementById('scrolling-div')
    if (position == 'right') {
      scrollingDiv.scrollTo({
        left: scrollPosition, // pixels from the left
        behavior: 'smooth' // makes it smooth
      });
      setScrollPosition(scrollPosition + 400)
    } else {
      scrollingDiv.scrollTo({
        left: -scrollPosition, // pixels from the left
        behavior: 'smooth' // makes it smooth
      });
      setScrollPosition(scrollPosition - 400)

    }
    const isAtEnd = scrollingDiv.scrollLeft + scrollingDiv.clientWidth >= scrollingDiv.scrollWidth - 1;

    console.log(isAtEnd);
    if (isAtEnd) {
      setScrollPosition(400)
    }

  }

  return (
    <>
    <div className='md:px-[100px] px-[10px] md:py-[150px]'>
      <div className="mt-[43px] text-center md:block flex lg:w-full w-full relative mb-[10px] overflow-hidden">
        <h2 className="md:text-[30px] text-[20px] bolkit text-[#352727] whitespace-nowrap mt-3 md:mt-0 font-bold">New Arrivals</h2>
        <p className="text=[18px] text-[#8c8c8c] instrument-san md:block hidden">Shine bright, sparkle always, and wear your confidence</p>
        <div className="absolute right-0">
          <SlidingButton handleScrolling={handleScrolling} />
        </div>

        <div id="scrolling-div" className="mt-[50px] overflow-x-auto scrollbar-hidden ml-[-105px] md:ml-[0px]">
          <div className="w-max flex gap-[21px]">
            {golds?.map((item, i) => {
              if (i < 7) {
                return <RelatedProductCard key={i} item={item} />;
              }
            })}
          </div>
        </div>
      </div>
      </div>

    </>
  )
}