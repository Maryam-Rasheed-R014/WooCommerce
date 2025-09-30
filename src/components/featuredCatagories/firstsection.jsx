import React from "react";
import Button from "../shared/button";

export default function Firstsection() {
  return (
    <>
      <div className=" text-center  mt-10 bg-[var(--featureBg)] text-[var(--light)]  py-20">
        <h3 className="font-bold text-3xl px-10">Featured Product Title</h3>
        <p className=" px-10  py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className=" pb-5">R150,00 – R400,00 incl VAT </p>
    
        <Button text="Read More" className="productButton !py-3 !px-10 mt-5 mx-auto !w-auto"/>
      </div>
    </>
  );
}
