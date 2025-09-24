import React from "react";
import { Icon } from "@iconify/react";
import TextArea from "antd/es/input/TextArea";

export default function AdditionalProductInfo() {
  return (
    <>
      <ul className="flex sm:flex-row justify-evenly container mx-auto px-5 sm:pt-15 pt-5">
        <li className="sm:text-xl text-small font-semibold sm:block hidden  ">Description</li>
        <li className="sm:text-xl text-small font-semibold sm:block hidden ">Additional Details</li>
        <li className="text-xl font-semibold">Reviews (1)</li>
      </ul>
      <hr className=" border-2 text-gray-300 my-5" />
      <div className="md:max-w-[50%] mx-auto px-5">
        <h4 className="font-medium text-3xl my-2">
          2 reviews for Tour Operator Plugin
        </h4>
        <hr className=" border-2 text-gray-300 my-5" />
      </div>
      <div className=" flex md:flex-row flex-col md:gap-15 gap-5 md:max-w-[50%] mx-auto mb-5 px-5">
        <Icon
          className="border-2 bg-black
        "
          icon="openmoji:person"
          width="72"
          height="72"
        />
   
        <div className="w-[100%]  ">
          {" "}
          <div className="flex justify-between md:flex-row flex-col ">
            <p>lightspeed (verified owner) – 9 May 2023</p>
            <div className="flex">
              <Icon icon="fluent-color:star-32" width="32" height="32" />
              <Icon icon="fluent-color:star-32" width="32" height="32" />
              <Icon icon="fluent-color:star-32" width="32" height="32" />
              <Icon icon="fluent-color:star-32" width="32" height="32" />
              <Icon icon="fluent-color:star-32" width="32" height="32" />
            </div>
          </div>
          <p className=" pt-10">The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.</p>
                  <hr className=" border-2 text-gray-300 my-5" />
                  <h2 className="text-xl font-medium">Add a review</h2>
<p>Your email address will not be published. Required fields are marked *</p>
<p className="text-xl mt-7">Your rating<span className="text-red-600">*</span>

     </p>
     <p className="flex">
    <Icon icon="fluent-color:star-32" width="32" height="32" />
    <Icon icon="fluent-color:star-32" width="32" height="32" />
    <Icon icon="fluent-color:star-32" width="32" height="32" />
    <Icon icon="fluent-color:star-32" width="32" height="32" />
    <Icon icon="pepicons-pencil:star" width="32" height="32" />
         </p>
         <p className="text-xl mt-7">Your review<span className="text-red-600">*</span></p>
     <TextArea className="!h-[200px] !border-black !border-2"/>
     <button className="text-white bg-[#2F8EFF] text-xl font my-5 px-5 py-3">submit</button>
        </div>
      </div>
    </>
  );
}
