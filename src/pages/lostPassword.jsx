import React from "react";
import { Checkbox, Input } from 'antd';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function LostPassword() {
    let navigate = useNavigate();
    const handleSubmit=()=>{


 toast.success('successfully sent' ,{toastId:"abc"})
   navigate("/createAccount");
  
}
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
        <Input type="email" className="h-[4em]" />
          <div className="flex sm:flex-row flex-col justify-between gap-4 my-5">
                <button 
                onClick={handleSubmit}
                className="bg-[#2F8EFF] sm:px-45 w-full px-auto py-3  text-white">
                  Reset Password
                </button>
                 <button 
               
                className="bg-[#2F8EFF] sm:px-45 w-full px-auto py-3 hidden text-white">
                  Go to login
                </button>
            
              </div>
           
      </div>
    </>
  );
}
