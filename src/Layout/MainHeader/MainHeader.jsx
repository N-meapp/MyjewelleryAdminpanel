import React from 'react'
import MainHeaderSlide from '../../Components/MainHeaderSlide/MainHeaderSlide'

const MainHeader = () => {
  return (
    <div>
        <div className='flex gap-3 w-full px-[70px] mt-3'>
          <div className='w-9/12'>
            <img className='w-full h-[70vh] object-cover rounded-[20px]' src='/public/assets/Images/header/h1.png' />
          </div>
          <div className='w-3/12'>
            <MainHeaderSlide />
          </div>
        </div>
    </div>
  )
}

export default MainHeader