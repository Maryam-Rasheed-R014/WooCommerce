import React from "react";
import exampleimg from "../../assets/images/product.jpg";
import { useNavigate } from "react-router";
import Button from "../shared/button";
export default function Cards() {
  let navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product One",
      price: "R150",
      image: exampleimg,
    },
    {
      id: 2,
      name: "Product Two",
      price: "R250",
      image: exampleimg,
    },
    {
      id: 3,
      name: "Product Three",
      price: "R350",
      image: exampleimg,
    },
    {
      id: 4,
      name: "Product Four",
      price: "R450",
      image: exampleimg,
    },
    {
      id: 5,
      name: "Product five",
      price: "R350",
      image: exampleimg,
    },
    {
      id: 6,
      name: "Product six",
      price: "R450",
      image: exampleimg,
    },
    {
      id: 7,
      name: "Product seven",
      price: "R350",
      image: exampleimg,
    },

    {
      id: 8,
      name: "Product eight",
      price: "R350",
      image: exampleimg,
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6 px-3 w-[100%] ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 rounded-b-md p-2 shadow-md text-center bg-[var(--bg-light)]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-30px   object-cover rounded-md"
            />
            <h3 className="mt-3 text-xl font-semibold">{product.name}</h3>
            <p className="text-[var(--border-medium)]">{product.price}</p>
              <Button text="Add to basket "className="productButton"  onClick={() => {
                navigate("/singleProduct");
              }}/>
          </div>
        ))}
      </div>
    </>
  );
}
