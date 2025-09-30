import React from 'react'
import { useState } from 'react';
import {  Input } from 'antd';
;
import {  Space } from 'antd'
import Button from '../shared/button';
export default function Register() {
       const [value, setValue] = useState('');
          const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
       <div className="px-5 py-3  ">
              {/*------------email---------------------------  */}
              <h2 className="font-bold text-4xl mb-10">Register</h2>
              <label htmlFor=" " className=" text-small block mb-1">
                Email address<span className="text-[var(--required)]"> *</span>
              </label>
              <Input type="email" className="h-[3.5em]" />
      
              {/* -----------password------------------ */}
      
              <label htmlFor=" " className=" text-small block mt-7 mb-1">
                Password<span className="text-[var(--required)]"> *</span>
              </label>
      
              <Input.Password
                placeholder=""
                className="!border-[var(--bg-dark)] h-[3.5em] mb-7"
              />
              {/* -----------login---------------- */}
              <div className=" mb-5">
              
                    
            <Button text=" Register" className="registerButton  md:w-[200px] lg:mx-30 md:px-20 w-full"/>
           
            </div>
           
            </div>
    </>
  )
}
