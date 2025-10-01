import React from 'react'
import ContactForm from '../components/contactus/contactForm'
import Heading from '../components/shared/heading'

const ContactUs = () => {
  return (
    <>
     <Heading text="Contact Us" />
    <div className='lg:w-[65%] md:w-[70%] sm:w-[85%] w-full  mx-auto px-7 mt-7 '>
       
         <ContactForm/>
    </div>
     
    </>
  )
}

export default ContactUs
