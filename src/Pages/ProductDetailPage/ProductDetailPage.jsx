import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import RelatedProducts from '../../Layout/CategoryPage/RelatedProducts'
import DetailHeader from '../../Layout/ProductDetail/DetailHeader'
import ProductDetails from '../../Layout/ProductDetail/ProductDetails'
import PriceBreakup from '../../Layout/ProductDetail/PriceBreakup'
import JewelryTryOn from '../../Components/AR3DModel/VirtualTryOn'
import Navbar from '../../Layout/Navbar/Navbar'
import SubMobileNav from '../../Layout/Navbar/subMobileNav'


const ProductDetailPage = () => {
  return (
    <div>
      <Navbar mobailView={<SubMobileNav/>} />
        <DetailHeader />
        <ProductDetails />
        <PriceBreakup />
        <RelatedProducts />
        <Footer />
    </div>
  )
}

export default ProductDetailPage