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
   const columnList = [
    { title: "Order number:", dataIndex: "orderNumber", key: "orderNumber" },
    { title: "Date:", dataIndex: "date", key: "date" }, 
      { title: "Total", dataIndex: "total", key: "total" },
     { title: "Payment method:", dataIndex: "paymentMethod", key: "paymentMethod" },
  
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold">Checkout</h2>
      <p className="text-xl py-5">Thank you. Your order has been received.</p>

      {/* ------- order summary ------- */}
        <div className="orderList">  <h3 className="text-2xl font-semibold mb-5 mt-10 ">Your order</h3>
      <Table
        columns={columnList}
        scroll={{ x: 400 }}
        dataSource={orders}
        rowClassName="!border-b-2 !border-black"
        pagination={false}
      /></div>

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
