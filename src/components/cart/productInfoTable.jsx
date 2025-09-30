import React , {useState} from "react";
import { Input, Table } from "antd";
import exapmleImg from "../../assets/icons/Layer_1.svg";
import { Icon } from "@iconify/react";
import Button from "../shared/button";
const ProductInfoTable = () => {
  const [cartdata, setCartData] = useState([ {
      id: 1,
      name: "LSX Mega Menus",
      price: 100,
      quantity: 1,
      subtotal: 100,
      image: exapmleImg,
    },
    {
      id: 2,
      name: "LSX Testimonials",
      price: 100,
      quantity: 1,
      subtotal: 100,
      image: exapmleImg,
    },
    {
      id: 3,
      name: "LSX Testimonials",
      price: 300,
      quantity: 3,
      subtotal: 900,
      image: exapmleImg,
    },
  ]);

   
const deleteRow=(id)=>{
  setCartData(prev=>prev.filter(item=>item.id!=id));
  
}
  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "product",
      render: (text, record) => (
        <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4 my-5 ml-3">
          <button  onClick={() => deleteRow(record.id)}><Icon icon="twemoji:cross-mark" width="15" height="15" /></button>
          <div>
            <img src={record.image} alt="" className="sm:w-10  w-8 sm:h-10 h-8 bg-black" />
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
      render: (text, record) => (
        <div className="flex items-center ">
          <div className="px-4 py-2 border-2">{record.quantity}</div>
        </div>
      ),
    },
    { title: "Subtotal", dataIndex: "subtotal", key: "subtotal" },
  ];

  return (
    <>
      <Table 
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={cartdata}
        rowClassName="!border-b-2 !border-black "
        pagination={false}
      size="
    
      "
        
      />

      <div className="flex md:flex-row flex-col p-4 border-2 !border-t-0 justify-between">
        <div className="flex items-center md:w-[40%] w-full coupon">
          <Input className="!border-[var(--border-dark)] p-1 !border-r-0 !h-[63.5px] " />
       
          <Button text="Apply Coupon" className="applyCouponButton !max-h-[49px]" />
        </div>
        <div className="">
          {" "}
       
         <Button text="Update basket " className="updateBasketButton"/>
        </div>
      </div>
    </>
  );
};

export default ProductInfoTable;
