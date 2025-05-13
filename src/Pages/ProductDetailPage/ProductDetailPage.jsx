import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import RelatedProducts from '../../Layout/CategoryPage/RelatedProducts'
import DetailHeader from '../../Layout/ProductDetail/DetailHeader'
import ProductDetails from '../../Layout/ProductDetail/ProductDetails'
import PriceBreakup from '../../Layout/ProductDetail/PriceBreakup'
import DetailsNavbar from '../../Layout/ProductDetail/DetailsNavbar'

const ProductDetailPage = () => {
  return (
    <div>
        <DetailsNavbar/>
        <DetailHeader />
        <ProductDetails />
        <PriceBreakup />
        <RelatedProducts />
        <Footer />

    </div>
  )
}

export default ProductDetailPage