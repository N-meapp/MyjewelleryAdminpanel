import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import { golds } from "../../constants/products"
import ProductListingLayout from '../../Layout/ProductListingLayout/ProductListingLayout'
import Footer from '../../Layout/Footer/Footer'

const ProductListing = () => {
  return (
    <div>
       <Navbar />
       <ProductListingLayout list={golds} />
       <Footer />
    </div>
  )
}

export default ProductListing