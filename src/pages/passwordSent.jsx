import React from 'react'

export default function passwordSent() {
  return (
    <>
         <div className="px-5 py-3 container mx-auto max-w-2xl">
        <h2 className="font-bold text-4xl mb-10">Loss Password</h2>
        <p className="text-small text-[var(--border-light)]">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>

        <label htmlFor=" " className=" text-small block my-8">
          Email address<span className="text-[var(--required)]"> *</span>
        </label>
      
          <div className="flex sm:flex-row flex-col justify-between gap-4 my-5">
                <button className="bg-[var(--primary)] sm:px-45 w-full px-auto py-3  text-[var(--light)]">
                  Reset Password
                </button>
            
              </div>
           
      </div>
    </>
  )
}
