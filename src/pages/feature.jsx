import React from 'react'
import Firstsection from '../components/featuredCatagories/firstsection'
import Secondsection from '../components/featuredCatagories/secondsection'
import Heading from '../components/shared/heading'
import Thirdsection from '../components/featuredCatagories/thirdsection'
import Fourthsection from '../components/featuredCatagories/fourthsection'

export default function Feature() {
  return (
    <div>
      <Heading text="Featured Category Block"/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
    </div>
  )
}
