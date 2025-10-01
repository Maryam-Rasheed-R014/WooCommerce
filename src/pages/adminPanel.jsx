import React, { useState } from "react";
import { Modal, Space } from "antd";
import { Form, Input } from "antd";
import Button from "../components/shared/button";
import Heading from "../components/shared/heading";
import { Table } from "antd";

import { Icon } from "@iconify/react";

const AdminPanel = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const MyFormItemContext = React.createContext([]);
  function toArr(str) {
    return Array.isArray(str) ? str : [str];
  }
  const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );
    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };
  const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  // -----------------table--------------------
  const [cartdata, setCartData] = useState([
    {
      id: 1,
      name: "LSX Mega Menus",
      price: 100,
      quantity: 1,
      category: "abc",
      des:"ggggggggggggggggggggggggggggg"
    },
    {
      id: 2,
      name: "LSX Testimonials",
      price: 100,
      quantity: 1,
      category: "xyx",
    },
    {
      id: 3,
      name: "LSX Testimonials",
      price: 300,
      quantity: 3,
      category: "vvvv",
      des:"hhjhhhhhhhh"
    },
  ]);

  const deleteRow = (id) => {
    setCartData((prev) => prev.filter((item) => item.id != id));
  };
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "product",
      render: (text, record) => (
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 my-5 ml-3">
          <div>
            <img
              src={record.image}
              alt=""
              className="sm:w-10  w-8 sm:h-10 h-8 bg-black"
            />
          </div>
          <div className="text-center">{record.name}</div>
        </div>
      ),
    },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    { title: "Category", dataIndex: "category", key: "category" },
      { title: "Description", dataIndex: "des", key: "des", render: (text, record) => (
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 my-5 ml-3">
        
          <p className="text-center max-w-[300px]">{record.des}</p>
        </div>
      ), },
    {
      title: "Update",
      dataIndex: "update",
      key: "",
      render: (text, record) => (
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 my-5 ml-3">
          <button
           
            className="text-[var(--primary)] underline"
             onClick={showModal}
          >
            Edit
          </button>

          <button
            onClick={() => deleteRow(record.id)}
            className="text-[var(--primary)] underline"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <> <Heading text="Admin Dashboard" />
     <div className="mx-5 flex justify-end"> <Button
        text="Add New Product"
        className="bg-[var(--primary)]  md:w-[400px]  md:px-20 w-full mt-5"
        onClick={showModal}
      ></Button></div>
     

      <Modal
        open={open}
        title="Enter Standrad Product Details"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Form name="form_item_path" layout="vertical">
          <MyFormItemGroup prefix={["user"]}>
            <MyFormItemGroup prefix={["name"]}>
              <MyFormItem
                name="productName"
                label="Product Name"
                className="w-full"
              >
                <Input type="text" className="!min-h-[3.5em]" />
              </MyFormItem>
              <MyFormItem
                name="productPrice"
                label="Product  Price"
                className="w-full"
              >
                <Input type="text" className="!min-h-[3.5em]" />
              </MyFormItem>
              <MyFormItem
                name="productDes"
                label="Product Description"
                className="w-full"
              >
                <Input type="text" className="!min-h-[3.5em]" />
              </MyFormItem>
              <MyFormItem
                name="productImg"
                label="Product Image"
                className="w-full"
              >
                <Input type="file" className="!min-h-[3.5em]" />
              </MyFormItem>
            </MyFormItemGroup>
          </MyFormItemGroup>
        </Form>
      </Modal>
      {/* -----------------table----------------- */}
     <div className="mx-5"><Table
        columns={columns}
        scroll={{ x: 600 }}
        dataSource={cartdata}
        rowClassName="!border-b-2 !border-black "
        pagination={false}
        className="my-10"
      /></div> 
    </>
  );
};
export default AdminPanel;
