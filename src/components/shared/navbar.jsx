import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";

import hammer from "../../assets/images/Group 33.svg";
import search from "../../assets/images/Frame 240.png";
import downArrow from "../../assets/images/Vector 11.svg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";
const Navbar = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const responsiveMenu=[
    {
      text: "Shop",
      path:"/products"
    },
      {
      text: "Service",
       path:"/feature"
    },
      {
      text: "FAQ",
    },
      {
      text: "About",
    },
      {
      text: "Contact",
    },
  ]
  return (
    <nav>
      <div className=" container-fluid md:container mx-auto flex items-center  justify-between   py-4 px-6">
      
        <div className="flex items-center space-x-2 cursor-pointer"  onClick={() => {
                navigate("/");
              }}>
          <img src={logo} alt="Logo" className="w-[110px] h-auto" />
        </div>

        <div className="hidden md:flex space-x-6 gap-x-2 font-medium">
          <a
            href="#about"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%]
             text-center  hover:text-[var(--primary)] "
            onClick={() => {
              navigate("/products");
            }}
          >
            Shop
          </a>
          <a
            href="#agents"
            className="font-Manrope  text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-[var(--primary)]"
            onClick={() => {
              navigate("/feature");
            }}
          >
            Service
          </a>
          <a
            href="#roadmap"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-[var(--primary)]"
          >
            FAQ
          </a>
          <a
            href="#tokenomics"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-[var(--primary)]"
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-[var(--primary)]"
              onClick={() => {
                navigate("/contactUs");
              }}
          >
            Contact
          </a>
        </div>

        <div className="flex  justify-content-between items-center space-x-5">
          <div className="hidden sm:flex font-bold sn">
            <p>R100,00</p>
          </div>
          <div className="relative cursor-pointer">
            <Icon icon="proicons:cart" width="32" height="30" />
            <p className="absolute bottom-4 left-5 border-2 rounded-2xl px-1 !text-[10px]">
              1
            </p>
          </div>
           <button className="hover:text-[var(--primary)] focus:text-[var(--primary)] focus:!border-none account cursor-pointer">
             <Icon
              icon="material-symbols:person"
              width="32"
              height="32"
              //  tabIndex={0} 
              className=""
              onClick={() => {
                navigate("/createAccount");
              }}
            />
           </button>
         
          <div>
           
            <Icon icon={isOpen?'mdi:close':'ic:baseline-menu'} width="24" height="24" className=" md:hidden block "   onClick={toggleMenu} />
         
          </div>
        </div>
      </div>
      {/*------------ responsive navbar----------- */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-[var(--bg-light)]`}>
       <ul className="mx-5 text-xl">
  {responsiveMenu.map((item, index) => (
    <div 
      key={index} 
      className="flex justify-between hover:bg-[var(--border-light)] cursor-pointer"
    >
      <li 
        className="py-5 px-10"
        onClick={() => {
          if (item.path) {
            navigate(item.path); 
            setIsOpen(false); 
          }
        }}
      >
        {item.text}
      </li>
    </div>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
