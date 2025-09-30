import React, { useState } from "react";
import { Checkbox, Input, Select, Radio } from "antd";
import { Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router";
import Button from "../shared/button";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const BillingDetails = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const cartdata = [
    {
      id: 1,
      product: "LSX Mega Menus",
      price: 100,
      quantity: 1,
      subtotal: 100,
    },
    {
      id: 2,
      product: "LSX Testimonials",
      price: 100,
      quantity: 1,
      subtotal: 100,
    },
    {
      id: 3,
      product: "LSX Testimonials",
      price: 300,
      quantity: 3,
      subtotal: 900,
    },
  ];

  const columns = [
    { title: "Product", dataIndex: "product", key: "product" },

    { title: "Subtotal", dataIndex: "subtotal", key: "subtotal" },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold">Checkout</h2>

      {/* Coupon Section */}
      <div className="border-2 border-[var(--primary)] my-3 py-5 pl-3">
        <Radio.Group>
          <Radio value={1}>
            <div className="text-xl">
              Have a coupon?{" "}
              <span className="text-[var(--primary)] underline">
                Click here to enter your code
              </span>
            </div>
          </Radio>
        </Radio.Group>
      </div>

      {/* Billing + Shipping */}
      <div className="flex md:flex-row flex-col md:gap-20 gap-0">
        {/* Billing Form */}
        <div className="container mx-auto flex flex-col mb-10 billing">
          <h3 className="text-2xl font-semibold py-5">Billing details</h3>

          <div className="flex md:flex-row flex-col gap-4 my-4">
            <div className="w-full">
              <label htmlFor="firstname" className="text-xl block pb-3">
                First name <span className="text-[var(--required)]">*</span>
              </label>
              <Input />
            </div>
            <div className="w-full">
              <label htmlFor="lastname" type="text" className="text-xl block pb-3">
                Last name <span className="text-[var(--required)]">*</span>
              </label>
              <Input />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="companyname" type="text" className="text-xl block pb-3">
              Company name (optional)
            </label>
            <Input />
          </div>

          <div className="w-full flex flex-col mt-5">
            <label htmlFor="countryname" className="text-xl block pb-3">
              Country / Region <span className="text-[var(--required)]">*</span>
            </label>
            <Select
              defaultValue="Pakistan"
              onChange={handleChange}
              options={[
                { value: "India", label: "India" },
                { value: "US", label: "US" },
                { value: "China", label: "China" },
                { value: "South Africa", label: "South Africa" },
              ]}
            />
          </div>

          <div className="w-full mt-8">
            <label htmlFor="street" className="text-xl block pb-3">
              Street address <span className="text-[var(--required)]">*</span>
            </label>
            <Input
              placeholder="House number and street name" type="text"
              className="!mb-5"
            />
            <Input placeholder="Apartment, suite, unit, etc." />
          </div>

          <div className="w-full mt-5">
            <label htmlFor="city" className="text-xl block pb-3">
              Town / City<span className="text-[var(--required)]">*</span>
            </label>
            <Input  type="text"/>
          </div>

          <div className="w-full flex flex-col mt-5">
            <label htmlFor="province" className="text-xl block pb-3">
              Province<span className="text-[var(--required)]">*</span>
            </label>
            <Select
              defaultValue="Punjab"
              onChange={handleChange}
              options={[
                { value: "sindh", label: "Sindh" },
                { value: "kpk", label: "KPK" },
                { value: "balochistan", label: "Balochistan" },
              ]}
            />
          </div>

          <div className="w-full mt-8">
            <label htmlFor="postcode" className="text-xl block pb-3">
              Postcode / ZIP<span className="text-[var(--required)]">*</span>
            </label>
            <Input />
          </div>

          <div className="w-full mt-5">
            <label htmlFor="phone" className="text-xl block pb-3">
              Phone<span className="text-[var(--required)]">*</span>
            </label>
            <Input />
          </div>

          <div className="w-full mt-5">
            <label htmlFor="email" className="text-xl block pb-3">
              Email Address<span className="text-[var(--required)]">*</span>
            </label>
            <Input />
          </div>
        </div>

        {/* Shipping */}
        <div className="w-full mb-10">
          <div className="flex gap-3 items-center">
            <Checkbox />
            <h3 className="text-2xl font-semibold">
              Deliver to a different address?
            </h3>
          </div>
          <div>
            <p className="py-4">Order notes (optional)</p>
            <TextArea className="!h-[200px]" />
          </div>
        </div>
      </div>

      {/* Order Section */}
      <h3 className="text-2xl font-semibold mb-5">Your order</h3>

      <Table
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={cartdata}
        rowClassName="!border-b-2 !border-black "
        pagination={false}
        size="
        
          "
      />

      {/* Payment Options */}
      <div className="w-full py-5 px-4 bg-[var(--bg-light)]">
        <Radio.Group
          onChange={onChange}
          value={value}
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          {/* Direct Bank Transfer */}
          <div className="flex flex-col ">
            <Radio value={1}>Direct bank transfer</Radio>
            {value === 1 && (
              <p className="ml-6 mt-3 p-3 text-gray-600 text-sm">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>

          {/* Cheque Payments */}
          <div className="flex flex-col">
            <Radio value={2}>Cheque payments</Radio>
            {value === 2 && (
              <p className="ml-6 mt-3 p-3 text-gray-600 text-sm">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>

          {/* Cash on Delivery */}
          <div className="flex flex-col">
            <Radio value={3}>Cash on delivery</Radio>
            {value === 3 && (
              <p className="ml-6  mt-3 p-3 text-gray-600 text-sm">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}
          </div>
        </Radio.Group>
        <hr className=" border-[var(--border-light)] mt-5" />
        <p className="!text-[12px] my-3 ">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <span className="underline text-[var(--primary)]">
            privacy policy
          </span>
        </p>
        <div className="flex gap-3 items-center">
          <Checkbox className="" />
          <p className="!text-[12px] my-3 ">
            I have read and agree to the website{" "}
            <span className="underline text-[var(--primary)]">
              terms and conditions
            </span>
          </p>
        </div>
        <div className="flex justify-end my-3">
          <Button
            icon={""}
            text="Place order"
            className="placeOrderButton text-[var(--text-light)]"
            onClick={() => {
              navigate("/orderRecieved");
            }}
          />
        </div>{" "}
      </div>
    </>
  );
};

export default BillingDetails;
