import React from 'react'
import { useState } from 'react';
import { Checkbox, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd'
export default function Register() {
       const [value, setValue] = useState('');
          const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
       <div className="px-5 py-3  ">
              {/*------------email---------------------------  */}
              <h2 className="font-bold text-4xl mb-10">Register</h2>
              <label htmlFor=" " className=" text-small block mb-5">
                Email address<span className="text-red-600"> *</span>
              </label>
              <Input type="email" className="h-[4em]" />
      
              {/* -----------password------------------ */}
      
              <label htmlFor=" " className=" text-small block mt-10 mb-5">
                Password<span className="text-red-600"> *</span>
              </label>
      
              <Input.Password
                placeholder=""
                className="!border-black h-[4em] mb-10"
              />
              {/* -----------login---------------- */}
              <div className="flex sm:flex-row flex-col justify-between gap-4 mb-5">
                <button className="bg-[#2F8EFF] sm:px-45 w-full px-auto py-3 text-white">
                  Log in
                </button>
            
              </div>
           
            </div>
    </>
  )
}
