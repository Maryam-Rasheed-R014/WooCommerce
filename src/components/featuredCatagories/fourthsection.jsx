import React from 'react'
import Firstsection from './firstsection'

export default function Fourthsection() {
  return (
    <div className=' container mx-auto px-5 flex flex-col md:flex-row  gap-5 my-10 sm:gap-10  '> 
      <div className='flex-1 bg-[var(--featureBg)]'><Firstsection/></div>
        <div className='flex-2 bg-[var(--featureBg)]'><Firstsection/></div> 
    </div>
  )
}
