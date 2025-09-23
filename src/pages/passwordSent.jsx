import React from 'react'

export default function passwordSent() {
  return (
    <>
         <div className="px-5 py-3 container mx-auto max-w-2xl">
        <h2 className="font-bold text-4xl mb-10">Loss Password</h2>
        <p className="text-small text-gray-400">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>

        <label htmlFor=" " className=" text-small block my-8">
          Email address<span className="text-red-600"> *</span>
        </label>
      
          <div className="flex sm:flex-row flex-col justify-between gap-4 my-5">
                <button className="bg-[#2F8EFF] sm:px-45 w-full px-auto py-3  text-white">
                  Reset Password
                </button>
            
              </div>
           
      </div>
    </>
  )
}
