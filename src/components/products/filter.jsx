import React from 'react'
import { Checkbox } from "antd";
import emptystar from "../../assets/icons/Ratings 20px.svg";
import fillstar from "../../assets/icons/filled.svg";
import { Slider } from 'antd';
export default function Filter( { className }) {
   const [value, setValue] = React.useState();

  return (
    <>
     <div className="flex  flex-col  border-2 px-5   w-full ">
          <h3 className=" font-semibold text-4xl  pt-5">Active filters</h3>
          <div className="flex my-7">
            <p className="border-2 py-2 px-3 rounded-4xl ">In stock</p>
            <p className="border-2 py-2 px-5 rounded-4xl ml-5">1 site</p>
          </div>
          <p className="text-right font-medium text-xl text-[var(--required)] pt-5">
            Clear All
          </p>
          <h3 className=" font-semibold text-4xl mb-3 ">Filter by price</h3>
         <Slider
      range={{ editable: true, minCount: 150, maxCount: 350 }}
      value={value}
      onChange={setValue}
    />
          <div className="flex mt-6 justify-between">
            <p className="border-2 py-1 px-3 rounded-xl ">R150</p>
            <p className="border-2 py-1 px-3 rounded-xl">R350</p>
          </div>{" "}
          <p className="text-right font-medium text-xl text-[var(--required)] mt-8">
            Reset
          </p>
          <h3 className=" font-semibold text-4xl  pt-5">
            Filter by stock status
          </h3>
          <div className="flex flex-col gap-4 mt-7">
            <Checkbox className="">
              <p className="text-xl pl-2">In stock (1)</p>{" "}
            </Checkbox>
            <Checkbox className="">
              <p className="text-xl pl-2">On backorder (1)</p>{" "}
            </Checkbox>
            <Checkbox className="">
              <p className="text-xl pl-2">Out of stock (1)</p>{" "}
            </Checkbox>
          </div>
          <p className="text-right font-medium text-xl text-[var(--required)] mt-8">
            Reset
          </p>
          <h3 className=" font-semibold text-4xl  pt-5">Filter by rating</h3>
          <div className="flex flex-col gap-4 mt-7">
            <Checkbox className="">
              <div className="flex gap-2 pl-2 text-xl">
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" /> 
              </div>{" "}
            </Checkbox>
            <Checkbox className="">
              <p className="flex gap-2 pl-2 text-xl">
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={emptystar} alt="" />
              </p>{" "}
            </Checkbox>
           <Checkbox className="">
              <p className="flex gap-2 pl-2 text-xl">
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
              </p>{" "}
            </Checkbox>
             <Checkbox className="">
              <p className="flex gap-2 pl-2 text-xl">
                <img src={fillstar} alt="" />
                <img src={fillstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
              </p>{" "}
            </Checkbox>
             <Checkbox className="">
              <p className="flex gap-2 pl-2 text-xl">
                <img src={fillstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
              </p>{" "}
            </Checkbox>
          </div>
          <p className="text-right font-medium text-xl text-[var(--required)] my-8">
            Reset
          </p>
        </div>   
    </>
  )
}
