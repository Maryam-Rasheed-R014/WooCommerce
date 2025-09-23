import React from 'react'
import Login from '../components/CreateAccount/login'
import Register from '../components/CreateAccount/register'

export default function CreateAccount() {
  return (
    <>
    <div className='container mx-auto flex lg:flex-row flex-col justify-evenly'>
    <Login/>
    <Register/>
    </div>
    </>
  )
}
