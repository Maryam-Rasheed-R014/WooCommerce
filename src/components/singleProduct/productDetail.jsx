import React from "react";
import { Icon } from "@iconify/react";
import product from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
export default function ProductDetail() {
    let navigate = useNavigate();
  return (
    <>
      <div className="grid lg:grid-cols-2  grid-cols-1 container mx-auto gap-5 mb-5">
        <div className="bg-black mb-5 ">
          <img
            src={product}
            alt="product"
            className="w-[40em] h-[35em] p-10 "
          />
        </div>
        <div className="detail pl-0">
          <h3 className="text-3xl font-bold pl-5">On Sale Product Title</h3>
          <div className="flex pt-1 mt-7 pl-5">
            <Icon icon="fluent-color:star-28" width="28" height="28" />
            <Icon icon="fluent-color:star-28" width="28" height="28" />
            <Icon icon="fluent-color:star-28" width="28" height="28" />
            <Icon icon="fluent-color:star-28" width="28" height="28" />
            <Icon icon="fluent-color:star-28" width="28" height="28" />
            <p className="text-xl ">(4 customer reviews)</p>
          </div>
          <div className="price mt-7 pl-5">
            <p className="text-2xl">
              <span className="line-through text-gray-500 pr-5">R250.59</span>
              R174.95
            </p>
          </div>
          <div className="mt-10 md:pr-20 pl-5">
            <p>
              Lorem ipsum dolor sit amet, sed ut graece tibique definitionem.
              Nec ex legere quodsi interesset, alii dictas referrentur duo cu.
              Ex quas docendi vis. At sit iudico tation primis, eos an modus
              maluisset persecuti, ut eos hinc aperiri referrentur. Mel ei brute
              nullam, ut porro invidunt sit.
            </p>
          </div>
          <div className="flex mt-10 gap-3 pl-5 ">
            <p className="border-2 px-7 text-center flex items-center">1</p>
            <button className="bg-[#2F8EFF] text-white py-4 px-10 text-2xl"   onClick={() => {
                    navigate("/cart");
                  }}>
              Add to basket
            </button>
          </div>
          <hr  className="border-2 text-gray-300 my-5 "/>
          <div className="flex justify-between lg:flex-row flex-col pl-5 gap-2">
            <p className="text-small font-semibold">SKU:<span className="text-[#2F8EFF]">product-sku</span> </p>
            <p className="text-small font-semibold">Categories:<span className="text-[#2F8EFF]"> Product Category</span> </p>
            <p className="text-small font-semibold">Tag:<span className="text-[#2F8EFF]"> Product Tag</span> </p>
          </div>
          
          <hr  className="border-2 text-gray-300 my-5 "/>
          <div className="sm:flex gap-3 mb-5 pl-5 hidden">
            <Icon icon="material-symbols:share" width="30" height="30" /><span className="ml-2 text-xl">share:</span>
            <Icon className=" border-5 rounded-2xl p-1" icon="streamline-logos:facebook-logo-2-solid" width="30" height="30" />
            <Icon className=" border-5 rounded-2xl p-1" icon="iconoir:whatsapp" width="30" height="30" /> 
            <Icon className=" border-5 rounded-2xl p-1" icon="si:twitter-duotone" width="30" height="30" />
            <Icon className=" border-5 rounded-2xl p-1" icon="iconamoon:email-thin" width="30" height="30" />
          </div>
        </div>
      </div>
    </>
  );
}
