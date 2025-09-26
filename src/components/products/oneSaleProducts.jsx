import React from "react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
import Button from "../shared/button";

export default function OneSaleProducts() {
    let navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "On Sale Product",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 2,
      name: "On Sale Product",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 3,
      name: "Product Title",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 4,
      name: "On Sale Product",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 5,
      name: "On Sale Product",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 5,
      name: "Product Title",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 6,
      name: "On Sale Product",
      preprice: "R200,00",
      newprice: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },

  
  ];

  return (
    <>
      <h3 className="pt-4 px-5 font-semibold">
        Product Grid with One Sale Products
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-3">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-b-md p-2  text-left bg-white"
          >
            <div className="bg-black  h flex justify-center relative">
              <div className="absolute top-2 right-2">
                <p className="bg-white px-2 py-1 rounded-lg text-[12px]">
                  SALE
                </p>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className=" py-10 rounded-md "
              />
            </div>
            <h3 className="mt-3 pt-2 text-xl  font-semibold">{product.name}</h3>
            <p className="pt-2">
              <span className="line-through pr-1 text-gray-500">
                {product.preprice}
              </span>
              {product.newprice}
            </p>
            <p className="pt-2"> {product.des}</p>
           
               <Button text="Add to basket "className="productButton"  onClick={() => {
                navigate("/singleProduct");
              }}/>

          </div>
        ))}
      </div>
    </>
  );
}
