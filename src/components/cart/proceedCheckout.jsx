import React from "react";
import Button from "../shared/button";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";

import { useState } from "react";
import { Input, Radio } from "antd";
const style = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const ProceedCheckout = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  let navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product Title",
      price: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 2,
      name: "Product Title",
      price: "R100,00 ",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse  gap-10 my-15">
        <div className="md:w-[45%] w-full">
          <h3 className="text-3xl font-semibold px-2 pb-5">You may be interested in…</h3>
          <div className=" grid   sm:grid-cols-2 grid-cols-1">
            {products.map((product) => (
              <div
                key={product.id}
                className=" rounded-b-md p-2  text-left bg-white"
              >
                <div className="bg-black  h flex justify-center ">
                  {" "}
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" py-10 rounded-md "
                  />
                </div>
                <h3 className="mt-3 pt-2 text-xl  font-semibold">
                  {product.name}
                </h3>
                <p className="pt-2">
                  <span className=" pr-1 font-semibold te">
                    {product.price}
                  </span>
                  incl VAT
                </p>
                <p className="pt-2"> {product.des}</p>
                {/* <button
                  className="my-5 px-4 py-4 bg-[#2F8EFF] text-white w-full hover:bg-blue-600"
                  onClick={() => {
                    navigate("/singleProduct");
                  }}
                >
                  Add to Cart
                </button> */}
                <Button text="Add to Cart" className='productButton'/>
              </div>
            ))}
          </div>
        </div>
        <div className=" md:w-[55%] w-full ">
           <h4 className="text-2xl font-semibold px-2 pb-5">Basket totals</h4>
          <div className="border-2 mt-3">
            <div className="flex  md:gap-5 gap-5 px-10  border-b-2 py-7 ">
              <div className=" md:w-[40%] w-full">
                <p>Subtotal</p>
              </div>
              <div className="w-full pl-5">
                <p>R200,00</p>
              </div>
            </div>
            <div className="flex  sm:flex-row   gap-5  px-10 border-b-2 py-7 justify-around ">
           
                <div className=" md:w-[45%] w-full"><p>Shipping</p></div>
             
              <div className="w-full">
                <Radio.Group className="space-y-3 "
                  style={style}
                  onChange={onChange}
                  value={value}
                  options={[
                    { value: 1, label: "Free shipping" },
                    { value: 2, label: "Local pickup" },
                    { value: 3, label: "Flat rate: R50,00" },
                  ]}
                />
                <p className="underline text-[var(--primary)] pl-1 pt-3 font-semibold">
                  Change address
                </p>{" "}
              </div>
            </div>
            <div className="flex md:gap-5 gap-5 px-10  justify-around py-7">
             <div className=" md:w-[45%] w-full"><p>Total</p></div> 
             <div className="w-full pl-3"><p>R200,00</p></div> 
            </div>
          </div>
        {/* -----------------button--------------------- */}
              <Button icon={''} text="Proceed to checkout" onClick={() => {
                navigate("/checkout");
              }}/>
        </div>
      </div>
    </>
  );
};

export default ProceedCheckout;
