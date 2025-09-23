import React from 'react'
import Heading from '../components/shared/heading'
import StandardProducts from '../components/products/standardProducts'
import OneSaleProducts from '../components/products/oneSaleProducts'
import OneSaleProductsRating from '../components/products/oneSaleProductsRating'
export default function Products() {
  return (
    <>
     <Heading text="Product Cards"/> 
     <StandardProducts/>
     <OneSaleProducts/>
     <OneSaleProductsRating/>

    </>
  )
}
