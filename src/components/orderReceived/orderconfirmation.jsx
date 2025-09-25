import React from "react";
import { Table } from "antd";

const Orderconfirmation = () => {
  const orders = [
    {
      id: 1,
      name: "LSX Mega Menus",
      orderNumber: 1365,
      date: "22 Jun 2023",
      total: "R150,00",
      paymentMethod: "Direct bank transfer",
    },
    {
      id: 2,
      name: "LSX ",
      orderNumber: 1366,
      date: "23 Jun 2023",
      total: "R200,00",
      paymentMethod: "Credit Card",
    },
  ];

 
  const columns = [
    { title: "Product", dataIndex: "name", key: "name" },
    { title: "Total", dataIndex: "total", key: "total" },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold">Checkout</h2>
      <p className="text-xl py-5">Thank you. Your order has been received.</p>

      {/* ------- order summary ------- */}
      <div className="container mx-auto flex md:flex-row flex-col">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="flex justify-start w-full py-2 text-lg font-semibold">
              <h5>Order number:</h5>
            </div>
            <div className="flex justify-start w-full py-2 text-lg font-semibold">
              <h5>Date:</h5>
            </div>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="grid grid-cols-2 gap-5 ">
              <div className="flex justify-start w-full py-2">
                <h5>{order.orderNumber}</h5>
              </div>
              <div className="flex justify-start w-full py-2">
                <h5>{order.date}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="flex justify-start w-full py-2 text-lg font-semibold">
              <h5>Total:</h5>
            </div>
            <div className="flex justify-start w-full py-2 text-lg font-semibold">
              <h5>Payment method:</h5>
            </div>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="grid grid-cols-2 gap-5 ">
              <div className="flex justify-start w-full py-2">
                <h5>{order.total}</h5>
              </div>
              <div className="flex justify-start w-full py-2">
                <h5>{order.paymentMethod}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------- table ------- */}
     <div className="order">  <h3 className="text-2xl font-semibold mb-5 mt-10 ">Your order</h3>
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={orders}
        rowClassName="!border-b-2 !border-black"
        pagination={false}
      /></div>

      {/* ------- address ------- */}
      <div>
        <h3 className="text-2xl font-semibold mb-5 mt-10">Your order</h3>
        <div className="mx-3 mb-7">
          <p className="pt-2">Light Speed</p>
          <p className="pt-2">Lightspeed Development</p>
          <p className="pt-2">46 Devon Street</p>
          <p className="pt-2">Cape Town</p>
          <p className="pt-2">Western Cape</p>
          <p className="pt-2">7530</p>
          <p className="pt-2">0615035196</p>
          <p className="pt-2">lsdev@lsdev.biz</p>
        </div>
      </div>
    </>
  );
};

export default Orderconfirmation;
