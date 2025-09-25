import React from "react";
import Heading from "../components/shared/heading";
import ProductInfoTable from "../components/cart/productInfoTable";
import ProceedCheckout from "../components/cart/proceedCheckout";

const Cart = () => {
  return (
    <>
      <div className="container mx-auto sm:px-5 px-0 ">
      <h2 className="text-4xl font-semibold mb-5 px-1">Cart</h2>{" "}
       <ProductInfoTable  className=""/>
       <ProceedCheckout/>
  
      </div>
    </>
  );
};

export default Cart;
