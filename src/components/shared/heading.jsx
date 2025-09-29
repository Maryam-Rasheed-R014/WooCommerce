import React from 'react'

export default function Heading(props) {
  return (
    <>
       <div className='bg-[var(--bg-dark)] text-4xl font-bold   py-5' >
        <h1 className='text-[var(--text-white)] px-10'>{props.text}</h1>
    </div>
    </>
  )
}
