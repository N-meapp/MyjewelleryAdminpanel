import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import { golds } from "../../constants/products"
import ProductListingLayout from '../../Layout/ProductListingLayout/ProductListingLayout'
import Footer from '../../Layout/Footer/Footer'
import MainMobileNav from '../../Layout/Navbar/MainMobileNav'

const ProductListing = () => {
  return (
    <div>
       <Navbar mobailView={<MainMobileNav/>}/>
       <ProductListingLayout list={golds} />
       <Footer />
    </div>
  )
}

export default ProductListing