
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
    <div className='px-[100px] py-[150px]'>
      <div className="mt-[43px] text-center lg:w-full w-full relative mb-[10px] overflow-hidden">
        <h2 className="text-[30px] bolkit text-[#352727]">New Arrivals</h2>
        <p className="text=[18px] text-[#8c8c8c] instrument-san">Shine bright, sparkle always, and wear your confidence</p>
        <div className="absolute right-0">
          <SlidingButton handleScrolling={handleScrolling} />
        </div>

        <div id="scrolling-div" className="mt-[70px] overflow-x-auto scrollbar-hidden">
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