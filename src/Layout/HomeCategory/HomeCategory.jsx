import React from 'react'
import CategoryTab from '../../Components/Tabs/CategoryTab'

const HomeCategory = () => {
  return (
    <div className='w-full'>
        <div className='md:px-[100px] pb-[100px] mt-[70px]'>
        <h2 className="md:text-[24px] text-[22px] bolkit text-[#352727] text-center">Shop by category</h2>

        <div className='flex md:gap-6 gap-2 justify-center items-center md:mt-[50px] px-2 mt-[15px] '>
           <CategoryTab homeCate={'w-[158px] h-[149px] '} heading="Women" image={'/assets/Images/category/women.png'} />  
          <CategoryTab  homeCate={'w-[158px] h-[149px]'} heading="Kids" image={'/assets/Images/category/kid.png'} />  
            <CategoryTab homeCate={'w-[158px] h-[149px]'} heading="Men" image={'/assets/Images/category/men.png'} />  
        </div>
        </div>
    </div>
  )
}

export default HomeCategory