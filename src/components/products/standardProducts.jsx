import React  from "react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
import Button1 from "../shared/button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Filter from "../products/filter";
import { Button, Drawer, Radio, Space } from 'antd';
export default function StandardProducts() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = e => {
    setPlacement(e.target.value);
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
    {
      id: 3,
      name: "Product Title",
      price: "R100,00 ",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 4,
      name: "Product Title",
      price: "R100,00 ",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },

    {
      id: 5,
      name: "Product Title",
      price: "R100,00 ",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },

    {
      id: 6,
      name: "Product Title",
      price: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
      
    setIsOpen(!isOpen);

  };
  return (
    <> 
     <div className="px-5 flex md:flex-row flex-col-reverse justify-between">
      <h3 className="  font-semibold">
        Product Grid with Standard Products only
      </h3>
      <div className="flex justify-end">
           <Space>
       
        <Button type="primary" onClick={showDrawer} className="">
          <Icon icon="mdi:filter-outline" width="24" height="24" /> Filter
        </Button>
      </Space>
     
          <Drawer
        // title="Basic Drawer"?
        placement={placement}
        

        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className=" mb-6  flex justify-between">
          <h3 className="font-semibold">Apply Filter</h3>
          <button onClick={onClose}><Icon icon="ic:outline-close" width="24" height="24" /></button>
        </div>
       <Filter/>
      </Drawer>
      </div></div>

<div className="relative">
<div className=""> 
   {/* {isOpen && <Filter className="!z-10 absolute top-0 !max-w-[200px] "

         />}  */}
     
         </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2   grid-cols-1  px-3 gap-5 !w-full ">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-b-md p-2  text-left bg-[var(--bg-product)] shadow-lg "
          >
            <div className="bg-[var(--bg-dark)]  h flex justify-center ">
              {" "}
              <img
                src={product.image}
                alt={product.name}
                className=" py-10 rounded-md "
              />
            </div>
            <h4 className="mt-3 pt-2 text-xl  font-semibold">{product.name}</h4>
            <p className="pt-2">
              <span className=" pr-1 font-semibold te">{product.price}</span>
              incl VAT
            </p>
            <p className="pt-2"> {product.des}</p>

            <Button1
              text="Add to basket "
              className="productButton"
              onClick={() => {
                navigate("/singleProduct");
              }}
            />
          </div>
        ))}
      </div></div>
    </>
  );
}
