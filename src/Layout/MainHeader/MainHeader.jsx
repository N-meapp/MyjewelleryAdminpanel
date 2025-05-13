import React from 'react'
import MainHeaderSlide from '../../Components/MainHeaderSlide/MainHeaderSlide'

const MainHeader = () => {
  return (
    <div className='bg-[#FDFDFD] rounded-b-[50px] pb-8 pt-[2px] shadow-[0_4px_10px_-4px_rgba(232,232,232,1)]'>
        <div className='flex gap-3 w-full md:px-[70px] px-[10px] md:mt-3 mt-[10px]'>
          <div className='md:w-9/12 mx-auto '>
            <img className='w-full h-[70vh]  object-cover rounded-[30px] md:block hidden' src='/public/assets/Images/header/h1.png' />
            <img className=' w-[465px] h-[476px] object-cover rounded-[30px] md:hidden' src='/public/assets/Images/header/home-img.png' />
          </div>
          <div className='w-3/12 hidden md:block'>
            <MainHeaderSlide /> 
          </div>
        </div>
     </div>
  )
}

export default MainHeader