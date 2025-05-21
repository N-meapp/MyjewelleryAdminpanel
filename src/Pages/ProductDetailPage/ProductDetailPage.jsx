import React,{useState} from 'react'
import Footer from '../../Layout/Footer/Footer'
import RelatedProducts from '../../Layout/CategoryPage/RelatedProducts'
import DetailHeader from '../../Layout/ProductDetail/DetailHeader'
import ProductDetails from '../../Layout/ProductDetail/ProductDetails'
import PriceBreakup from '../../Layout/ProductDetail/PriceBreakup'
import JewelryTryOn from '../../Components/AR3DModel/VirtualTryOn'
import Navbar from '../../Layout/Navbar/Navbar'
import SubMobileNav from '../../Layout/Navbar/subMobileNav'


const ProductDetailPage = () => {
   const [searchTerm,setSearchTerm]=useState('')
    const [searchResult,setSearchResult]=useState([])
  return (
    <div>
      <Navbar mobailView={<SubMobileNav/>}  searchTerm={searchTerm}   setSearchTerm={setSearchTerm} setSearchResult={setSearchResult} />
        <DetailHeader />
        <ProductDetails />
        <PriceBreakup />
        <RelatedProducts />
        <Footer />
    </div>
  )
}

export default ProductDetailPage