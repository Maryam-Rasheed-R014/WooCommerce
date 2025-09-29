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
              <label htmlFor=" " className=" text-small block mb-5">
                Email address<span className="text-[var(--required)]"> *</span>
              </label>
              <Input type="email" className="h-[4em]" />
      
              {/* -----------password------------------ */}
      
              <label htmlFor=" " className=" text-small block mt-10 mb-5">
                Password<span className="text-[var(--required)]"> *</span>
              </label>
      
              <Input.Password
                placeholder=""
                className="!border-[var(--bg-dark)] h-[4em] mb-10"
              />
              {/* -----------login---------------- */}
              <div className="flex sm:flex-row flex-col justify-between gap-4 mb-5">
                {/* <button className="bg-[var(--primary)] sm:px-45 w-full px-auto py-3 text-[var(--text-light)]">
                  Log in
                </button>
             */}
                    
          <Button text=" Register" className="registerButton sm:px-45 w-full px-auto"/>
              </div>
           
            </div>
    </>
  )
}
