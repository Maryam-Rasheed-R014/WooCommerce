import React from "react";
import { useState } from "react";
import { Checkbox, Input } from "antd";

import { useNavigate } from "react-router";
import Button from "../shared/button";
export default function Login() {
      let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <div className="px-5 py-3  ">
        {/*------------email---------------------------  */}
        <h2 className="font-bold text-4xl mb-10">Login</h2>
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
          className="!border-[var(--border-dark)] h-[4em] mb-10"
        />
        {/* -----------login---------------- */}
        <div className="flex sm:flex-row flex-col justify-between sm:gap-9 gap-4 mb-5">
       
          <Button text=" Log in" className="loginButton !px-30"/>
          <div className=" flex items-center ">
            <Checkbox className="p-0 !border-[var(--border-medium)]">
              <p className="!text-[14px] text-[var(--border-medium)] pl-1 ">Remember me </p>
            </Checkbox>
          </div>
        </div>
        <p className="text-[var(--primary)] font-semibold text-xl underline"   onClick={() => {
                navigate("/lostPassword");
              }}>
          Lost your password?
        </p>
      </div>
    </>
  );
}
