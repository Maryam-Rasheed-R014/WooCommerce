import React from 'react'
import ProductDetail from '../components/singleProduct/productDetail'
import AdditionalProductInfo from '../components/singleProduct/additionalProductInfo'
import RelatedProducts from '../components/singleProduct/relatedProducts'

export default function SingleProduct() {
  return (
    <>
      <ProductDetail/>
      <AdditionalProductInfo/>
      <RelatedProducts/>
    </>
  )
}
