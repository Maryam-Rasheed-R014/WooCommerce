import React from "react";
import exampleIcon from "../../assets/icons/Layer_1.svg";
import ratings from "../../assets/icons/Group Copy.svg";
import { useNavigate } from "react-router";
import Button from "../shared/button";
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
      id: 5,
      name: "On Sale Product",
      price: "R200,00",

      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 6,
      name: "Product Title",
      price: "R200,00",
   
      rating: ratings,
      image: exampleIcon,
    },
    {
      id: 7,
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  px-3">
        {products.map((product) => (
          <div
            key={product.id}
            className=" rounded-b-md p-2  text-left bg-[var(--bg-light)] "
          >
            <div className="bg-[var(--bg-dark)]  h flex justify-center relative">
              <div className="absolute top-2 right-2">
                <p className="bg-[var(--bg-light)]  px-2 py-1 rounded-lg text-[12px]">
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
           
          
              <Button text="Add to basket "className="productButton"  onClick={() => {
                navigate("/singleProduct");
              }}/>
          </div>
        ))}
      </div>
    </>
  );
}
