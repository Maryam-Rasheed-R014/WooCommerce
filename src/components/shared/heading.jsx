import React from 'react'

export default function Heading(props) {
  return (
    <>
       <div className='bg-black text-4xl font-bold   py-5' >
        <h1 className='text-white px-10'>{props.text}</h1>
    </div>
    </>
  )
}
