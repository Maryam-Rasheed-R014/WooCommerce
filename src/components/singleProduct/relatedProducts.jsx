import React from "react";
import { useNavigate } from "react-router"; 
import exampleIcon from "../../assets/icons/Layer_1.svg"; 
import Button from "../shared/button";
export default function RelatedProducts() {
  const navigate = useNavigate(); 

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
      price: "R100,00",
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
  ];

  return (
    <div className="container mx-auto px-5 ">
      <h3 className="font-semibold text-xl mb-4">Related Products</h3>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-b-md p-2 text-left bg-[var(--bg-light)] shadow"
          >
            <div className="bg-[var(--bg-dark)] flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="py-10 rounded-md"
              />
            </div>

            <h3 className="mt-3 pt-2 text-xl font-semibold">{product.name}</h3>

            <p className="pt-2">
              <span className="pr-1 font-semibold">{product.price}</span> incl VAT
            </p>

            <p className="pt-2">{product.des}</p>

                     
             <Button text="  Add to Cart" className="productButton " onClick={() => {
                    navigate("/singleProduct");
                  }}/> 
          </div>
        ))}
      </div>
    </div>
  );
}
