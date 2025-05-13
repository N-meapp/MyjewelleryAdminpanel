
import React, { useRef, useState } from 'react';
import './CategoryList.css';

const CategoryList = ({cateNav}) => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <div className={cateNav} >
        <div
          className='overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing'
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className='flex gap-3 min-w-max w-[500px]'>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/all.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>All Jewelry</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/2.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Gold</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/3.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Diamond</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/4.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Silver</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/5.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Wedding</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/6.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Handcrafted</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/7.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Daily Wear</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/8.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>Gemstone</p>
            </div>
            <div className='w-[150px] flex items-center gap-2 select-none'>
              <img className='w-[20px]' src='/public/assets/Images/category/all.png' alt='icon' />
              <p className='poppins-regular text-[13px] text-[#474141] font-[500]'>All Jewelry</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CategoryList