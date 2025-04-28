import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import Footer from '../../Layout/Footer/Footer'
import RelatedProducts from '../../Layout/CategoryPage/RelatedProducts'
import DetailHeader from '../../Layout/ProductDetail/DetailHeader'
import ProductDetails from '../../Layout/ProductDetail/ProductDetails'
import PriceBreakup from '../../Layout/ProductDetail/PriceBreakup'

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar />
        <DetailHeader />
        <ProductDetails />
        <PriceBreakup />
        <RelatedProducts />
        <Footer />

    </div>
  )
}

export default ProductDetailPage