import React from 'react'
import CategoryTab from '../../Components/Tabs/CategoryTab'

const HomeCategory = () => {
  return (
    <div className=''>
        <div className='px-[100px] pb-[100px] pt-[20px]'>
        <h2 className="text-[24px] bolkit text-[#352727] text-center">Shop by category</h2>

        <div className='flex gap-6 justify-center items-center mt-[50px]'>
           <div > <CategoryTab heading="Women" image={'/assets/Images/category/women.png'} /></div>
           <div > <CategoryTab heading="Men" image={'/assets/Images/category/men.png'} /></div>
           <div ><CategoryTab heading="Kids" image={'/assets/Images/category/kid.png'} /></div>
        </div>
        </div>
    </div>
  )
}

export default HomeCategory