import React from 'react'
import Firstsection from './firstsection'

export default function Thirdsection() {
  return (
    <div className='flex flex-col md:flex-row mx-auto px-5 mt-0 container gap-0 md:gap-3'>
      <Firstsection />
         <Firstsection />
            <Firstsection />
      
    </div>
  )
}
