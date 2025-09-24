import { Checkbox, Input } from "antd";
import React from "react";
import { useState } from "react";
import { Radio } from "antd";
import { Icon } from "@iconify/react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
const style = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};
const RadioGroup = Radio.Group;

const ContactInfo = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const products = [
    {
      id: 1,
      name: "Product Title",
      price: "R100,00",
      prevprice: "R150,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 2,
      name: "Product Title",
      price: "R100,00",
      prevprice: "R150,00",
      prevprice: "R150,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-semibold ">Checkout</h2>

      {/* ----------------contact info-------------------- */}
      <div className="flex md:flex-row flex-col gap-5 mt-5">
        <div className=" w-full contactInfo">
          {/* --------------------------1------------------------------ */}
          <div>
            {" "}
            <h4 className="text-xl font-semibold pb-2">
              1. Contact information
            </h4>
            <p>Already have an account? Log in.</p>
            <label htmlFor="" className="py-3 block">
              We'll use this email to send you details and updates about your
              order.
            </label>
            <Input type="email" />
            <div className="flex py-3 gap-3 items-center">
              <Checkbox value={"createAccount"} /> <p>createAccount</p>
            </div>
          </div>
          {/* ---------------------------2------------------------ */}
          <div>
            {" "}
            <h4 className="text-xl font-semibold pb-2 mt-6">
              2. Shipping address
            </h4>
            <p>Enter the address where you want your order delivered.</p>
            <div className="flex  flex-col gap-3">
              <div className="flex sm:flex-row flex-col gap-3 mt-3">
                <Input type="text" placeholder="First name" />
                <Input type="text" placeholder="Last name" />
              </div>
              <Input type="text" placeholder="Address" />
              <Input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <div className="flex sm:flex-row flex-col gap-3 mt-3">
                <Input type="text" placeholder="Country/Region" />
                <Input type="text" placeholder="City" />
              </div>
              <div className="flex sm:flex-row flex-col gap-3 mt-3">
                <Input type="text" placeholder="Province" />
                <Input type="number" placeholder="Postal code" />
              </div>
              <Input type="number" placeholder="Phone (optional)" />
              <div className="flex py-3 gap-3 items-center">
                <Checkbox value={"createAccount"} />{" "}
                <p>Use same address for billing</p>
              </div>
            </div>
          </div>
          {/* -----------------------3--------------------- */}
          <div>
            {" "}
            <h4 className="text-xl font-semibold pb-2 mt-6">
              3. Shipping options
            </h4>
            <div className="flex justify-between border-2 p-5 rounded-md mb-7 ">
            <Radio.Group
  style={{ display: "flex", flexDirection: "column", gap: 8, width: "100% " }}
  onChange={onChange}
  value={value}
  className="w-full"
>
  <Radio value={1} className="w-full border-b  border-gray-300 !pb-3 block">
    <div className="flex justify-between w-full">
      <span className="text-sm">Free shipping</span>
      <span>R0,00</span>
    </div>
  </Radio>

  <Radio value={2} className="w-full border-b  border-gray-300 !pb-3 block">
    <div className="flex justify-between w-full">
      <span className="text-sm">Local pickup</span>
      <span>R50,00</span>
    </div>
  </Radio>

   <Radio value={3} className="w-full border-b  border-gray-300 !pb-3 block">
    <div className="flex justify-between w-full">
      <span className="text-sm">Flat rate</span>
      <span>R100,00</span>
    </div>
  </Radio>
</Radio.Group>



            </div>
             
          </div>
          {/* ----------------------4------------------------ */}
          <div>
            <h4 className="text-xl font-semibold pb-2 mt-6">
              4. Payment options
            </h4>
            <div className="flex justify-between border-2 p-5 rounded-md mb-7 ">
              <Radio.Group
                style={{ display: "flex", flexDirection: "column", gap: 8, width: "100% " }}
                onChange={onChange}
                value={value}
                options={[
                  { value: 1, label: "Direct bank transfer", style: { borderBottom: "1px solid #d1d5db", paddingBottom: "8px" }  },
                  { value: 2, label: "Cheque payments"  , style: { borderBottom: "1px solid #d1d5db", paddingBottom: "8px" }},
                  { value: 3, label: "Cash on delivery",  style: { borderBottom: "1px solid #d1d5db", paddingBottom: "8px" } },
                ]}
              />
            </div>
            <div className="flex py-3 gap-3 items-center">
              <Checkbox value={"createAccount"} />{" "}
              <p>Add a note to your order</p>
            </div>
            <p className="text-xl my-5 pb-5">
              By proceeding with your purchase you agree to our{" "}
              <span className="text-[#2F8EFF] underline font-semibold">
                {" "}
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="text-[#2F8EFF] underline font-semibold">
                Privacy Policy
              </span>{" "}
            </p>
            <div className="flex justify-between gap-5 border-gray-600 py-5 ">
              <div className=" w-full flex flex-row justify-center items-center gap-3  border py-5">
                {" "}
                <Icon
                  icon="material-symbols-light:arrow-back-rounded"
                  width="30"
                  height="30"
                />
                <button
                  className=" text-xl"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  {" "}
                  Return to Basket
                </button>
              </div>
              <button className=" py-5 text-xl w-full bg-[#FF7A00]">
                Place Order
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div></div>

          <div className=" flex  flex-col   mx-auto  px-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex md:flex-row flex-col gap-5 border-t border-gray-300 pb-5 mb-5 pt-3"
              >
                <div className="relative">
                  <img
                    className="border-2 bg-black w-[72px] h-[72px] object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <span className="absolute -top-2 -left-2 bg-white border border-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                    {product.id}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-semibold">{product.name}</p>
                    <p className="font-semibold">{product.price}</p>
                  </div>
                  <p className="pt-3">
                    <span className="text-gray-600 text-small line-through pr-3">
                      {product.prevprice}
                    </span>{" "}
                    {product.price}
                  </p>
                  <p className="text-sm mt-3">{product.des}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-600">
              <p className="text-xl text-[#2F8EFF] underline py-5">
                Add a coupon
              </p>
            </div>
            <div className="flex justify-between py-5 border-t border-gray-600">
              <p className="text-xl">Subtotal</p>
              <p className="text-xl">R150,00</p>
            </div>
            <div className="flex flex-col py-5 border-t border-gray-600">
              <div className="flex justify-between">
                <p className="text-xl">Subtotal</p>
                <p className="text-xl">R150,00</p>
              </div>
              <p className="text-small pt-2">Flat rate</p>
              <p className="text-small py-5">
                Shipping to 7925, Cape Town, Western Cape, South Africa
              </p>
            </div>

            <div className="flex justify-between py-5 border-t border-gray-600">
              <p className="text-2xl font-semibold">Total</p>
              <p className="text-2xl font-semibold">R200,00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
