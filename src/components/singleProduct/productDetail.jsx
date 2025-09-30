import React from "react";
import { Icon } from "@iconify/react";
import product from "../../assets/icons/Layer_1.svg";
import { useNavigate } from "react-router";
import Button from "../shared/button";
import { Input } from "antd";
export default function ProductDetail() {
    let navigate = useNavigate();
  return (
    <>
      <div className="grid lg:grid-cols-2  grid-cols-1 container mx-auto gap-5 mb-5">
        <div className="bg-[var(--bg-dark)] mb-5 w-full max-w-[800px] max-h-[550px] h-full p-10 ">
          <img
            src={product}
            alt="product"
            className=" w-full h-full px-auto"
          />
        </div>
        <div className="detail ">
          <h3 className="text-3xl font-bold pl-5">On Sale Product Title</h3>
          <div className="flex pt-1 mt-7 pl-5">
           <div className="flex gap-1">
                          <Icon icon="emojione:star" className="size-7" />
                     <Icon icon="emojione:star" className="size-7" />
                    <Icon icon="emojione:star" className="size-7"  />
                        <Icon icon="emojione:star" className="size-7"  />
                       <Icon icon="emojione:star" className="size-7" />
                       </div>
            <p className="text-xl py-1 ">(4 customer reviews)</p>
          </div>
          <div className="price mt-7 pl-5">
            <p className="text-2xl">
              <span className="line-through text-[var(--border-medium)] pr-5">R250.59</span>
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
            {/* <p className="border-2 px-7  text-center flex items-center">1</p> */}
          <Input type="number" min={0} className="max-w-[60px] text-center"/>
      
            <Button text=" Add to Basket" className="productButton !my-0" onClick={() => {
                    navigate("/cart");
                  }}/>
          </div>
          <hr  className="border-2 text-[var(--border-light)] my-5 "/>
          <div className="flex justify-between lg:flex-row flex-col pl-5 gap-2">
            <p className="text-small font-semibold">SKU:<span className="text-[var(--primary)]"> Product-sku</span> </p>
            <p className="text-small font-semibold">Categories:<span className="text-[var(--primary)]"> Product Category</span> </p>
            <p className="text-small font-semibold">Tag:<span className="text-[var(--primary)]"> Product Tag</span> </p>
          </div>
          
          <hr  className="border-2 text-[var(--border-light)] my-5 "/>
          <div className="sm:flex gap-3 mb-5  hidden">
            <div className="flex gap-1"><Icon icon="material-symbols:share" className="size-7"/><h4 className="font-semibold ">Share:</h4></div>
            <Icon className=" border-3 rounded-2xl p-1 size-7 cursor-pointer" icon="streamline-logos:facebook-logo-2-solid"  />
            <Icon className=" border-3 rounded-2xl p-1 size-7 cursor-pointer" icon="iconoir:whatsapp"  /> 
            <Icon className=" border-3 rounded-2xl p-1 size-7 cursor-pointer" icon="si:twitter-duotone" />
            <Icon className=" border-3 rounded-2xl p-1 size-7 cursor-pointer" icon="iconamoon:email-thin"  />
          </div>
        </div>
      </div>
    </>
  );
}
