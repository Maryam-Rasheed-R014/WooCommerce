import React , {useState} from "react";
import Heading from "../components/shared/heading";
import StandardProducts from "../components/products/standardProducts";
import OneSaleProducts from "../components/products/oneSaleProducts";
import OneSaleProductsRating from "../components/products/oneSaleProductsRating";
import Filter from "../components/products/filter";


export default function Products() {
  return (
    <>
      <Heading text="Product Cards" />
      <div className="container-fluid flex px-5  sm:flex-row flex-col my-10 md:gap-0 gap-5  mx-auto ">
        <div className="hidden">
          <Filter />
        </div>
        <div className="w-[100%]">
          {" "}
          <StandardProducts />
          <OneSaleProducts />
          <OneSaleProductsRating />
        </div>
      </div>
    </>
  );
}
