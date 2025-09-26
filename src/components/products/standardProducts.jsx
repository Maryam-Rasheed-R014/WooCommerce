import React from "react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
import Button from "../shared/button";
export default function StandardProducts() {
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
      id: 3,
      name: "Product Title",
      price: "R100,00",
      des: "Lorem ipsum dolor sit amet consectetur sociis et.",
      image: exampleIcon,
    },
    {
      id: 4,
      name: "Product Title",
      price: "R100,00",
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
  return (
    <>
      <h3 className=" px-5 font-semibold">
        Product Grid with Standard Products only
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2   grid-cols-1  px-3">
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
            <h3 className="mt-3 pt-2 text-xl  font-semibold">{product.name}</h3>
           <p className="pt-2">
              <span className=" pr-1 font-semibold te">
                {product.price}
              </span>incl VAT
          
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
