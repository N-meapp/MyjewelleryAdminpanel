import React, { useEffect, useState } from 'react'
import CategoryTab from '../../Components/Tabs/CategoryTab'
import { fetchGenderData } from '../../API/userAPI'
import { useNavigate } from 'react-router-dom'


const HomeCategory = () => {
  const navigate = useNavigate()
  const [productData, setProductData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

  useEffect(() => {
    fetchGenderData(setProductData)
  }, [])
  return (
    <div className='w-full'>
      <div className='md:px-[100px] pb-[100px] mt-[70px]'>
        <h2 className="md:text-[24px] text-[22px] bolkit text-[#352727] text-center">Shop by category</h2>
        <div className='flex md:gap-6 gap-2 justify-center items-center md:mt-[50px] px-2 mt-[15px] '>
          {productData.map((item) => {
            const handleClick = () => {
              navigate(`/categories`, { state: { id: item.id } })
            }
            return (
              <CategoryTab
                id={item.id}
                homeCategory={handleClick}
                setSelectedCategory={setSelectedCategory}
                settselectedCategory={selectedCategory}
                homeCate={'w-[158px] h-[149px] '}
                heading={item.name}
                image={item.image}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeCategory