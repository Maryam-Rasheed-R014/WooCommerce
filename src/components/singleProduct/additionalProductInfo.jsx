import React , { useState } from "react";
import { Icon } from "@iconify/react";
import TextArea from "antd/es/input/TextArea";
import { Flex, Rate } from "antd";
import Button from "../shared/button";
const desc = [];

export default function AdditionalProductInfo() {
   const [value, setValue] = useState(3);
  return (
    <>
      <ul className="flex sm:flex-row justify-evenly container mx-auto px-5 sm:pt-15 pt-5">
        <li className="sm:text-xl text-sm font-semibold sm:block hidden  ">
          Description
        </li>
        <li className="sm:text-xl text-sm font-semibold sm:block hidden ">
          Additional Details
        </li>
        <li className="text-xl font-semibold">Reviews (1)</li>
      </ul>
      <hr className=" border-2 text-[var(--border-light)] my-5" />
      <div className="md:max-w-[50%] mx-auto px-5">
        <h4 className="font-medium text-3xl my-2">
          2 reviews for Tour Operator Plugin
        </h4>
        <hr className=" border-2 text-[var(--border-light)] my-5" />
      </div>
      <div className=" flex md:flex-row flex-col md:gap-15 gap-5 md:max-w-[50%] mx-auto mb-5 px-5">
        <Icon
          className="border-2 bg-[var(--bg-black)]
        "
          icon="openmoji:person"
          width="72"
          height="72"
        />

        <div className="w-[100%]  ">
          {" "}
          <div className="flex justify-between md:flex-row flex-col ">
            <p>lightspeed (verified owner) – 9 May 2023</p>
            <div className="flex gap-1">
               <Icon icon="emojione:star" width="28" height="28" />
          <Icon icon="emojione:star" width="28" height="28" />
         <Icon icon="emojione:star" width="28" height="28" />
             <Icon icon="emojione:star" width="28" height="28" />
            <Icon icon="emojione:star" width="28" height="28" />
            </div>
          </div>
          <p className=" pt-10">
            The LSX Tour Operator plugin is a comprehensive WordPress plugin
            designed specifically for tour operators and travel agencies. As a
            language model, I cannot provide personal opinion or experience with
            the product, but I can give you an overview of the plugin based on
            its features and user feedback.
          </p>
          <hr className=" border-2 text-[var(--border-light)] my-5" />
          <h2 className="text-xl font-medium">Add a review</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p className="text-xl mt-7">
            Your rating<span className="text-[var(--required)]">*</span>
          </p>
          <p className="flex">
            <Flex gap="middle" vertical>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span>{desc[value - 1]}</span> : null}
              </Flex>
           
          </p>
          <p className="text-xl mt-7">
            Your review<span className="text-[var(--required)]">*</span>
          </p>
          <TextArea className="!h-[200px] !border-[var(--border-dark)] !border-2" />
     
          <Button text="Submit" className="productButton"/>
        </div>
      </div>
    </>
  );
}
