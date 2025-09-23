import React from "react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import ratings from "../../assets/icons/Group Copy.svg";
import { useNavigate } from "react-router";

export default function OneSaleProductsRating() {
    let navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 2,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 3,
      name: "Product Title",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 4,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 3,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 4,
      name: "Product Title",
      price: "R200,00",
   
      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 3,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },

    {
      id: 3,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
  ];
  return (
    <>
      <h3 className="pt-4 px-5 font-semibold">
        Product Grid with One Sale Products that have Ratings
      </h3>
      <div className="grid lg:grid-cols-5 md:grid-cols-4  sm:grid-cols-3 grid-cols-2  px-3">
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
             <img className="pt-2" src={product.rating}/>
            <p className="pt-2">
              <span className=" pr-1 font-semibold te">
                {product.price}
              </span>incl VAT
          
            </p>
           
            <button className="my-5 px-4 py-4 bg-[#2F8EFF] text-white w-full hover:bg-blue-600"  onClick={() => {
                navigate("/singleProduct");
              }}>
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
