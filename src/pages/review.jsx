import React from 'react'
import Heading from '../components/shared/heading'
import Allreview from '../components/review/allreview'
import Categoryreview from '../components/review/categoryreview'
import Productreview from '../components/review/productreview'
export default function Review() {
  return (
    <>
 
      <Heading text="WooCommerce Reviews Blocks"/>
     <div className="container mx-auto max-w-2xl "><Allreview/>
     <Categoryreview/>
    <Productreview/></div> 
    </>
  )
}
