import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import cart from "../../assets/images/Group 14.svg";
import frame from "../../assets/images/Frame.svg";
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
  return (
    <nav>
      <div className=" container-fluid md:container mx-auto flex items-center  justify-between   py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-[110px] h-auto" />
        </div>

        <div className="hidden md:flex space-x-6 gap-x-2 font-medium">
          <a
            href="#about"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center  hover:text-blue-400"
             onClick={() => {
                navigate("/products");
              }}
          >
            Shop
          </a>
          <a
            href="#agents"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-blue-400"
               onClick={() => {
                navigate("/feature");
              }}
             >
            Service
          </a>
          <a
            href="#roadmap"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-blue-400"
          >
            FAQ
          </a>
          <a
            href="#tokenomics"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="font-Manrope text-[15px] leading-[15px] tracking-[0.5%] text-center hover:text-blue-400"
          >
            Contact
          </a>
        </div>

        <div className="flex  justify-content-between items-center space-x-5">
          <div className="hidden sm:flex font-bold sn">
            <p>R100,00</p>
          </div>
          <div className="relative">
            <Icon icon="proicons:cart" width="40" height="40" />
            <p className="absolute bottom-5 left-6 border-2 rounded-2xl px-2 text-small">
              1
            </p>
          </div>
          <div>
            <img
              className="w-6 h-6"
              src={frame}
              alt=""
              onClick={() => {
                navigate("/createAccount");
              }}
            />
          </div>
          <div>
            <img
              className=" md:hidden block w-6 h-6"
              src={hammer}
              alt=""
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {/*------------ responsive navbar----------- */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-100`}>
        <ul className="mx-5 text-xl">
          <div className="hover:bg-gray-300 cursor-pointer">
            <li className=" py-5 px-10">
              <img src={search} alt="" />
            </li>
          </div>
          <div className=" flex justify-between hover:bg-gray-300 cursor-pointer ">
            <li className=" py-5 px-10">Home</li>
          </div>
          <div className=" flex justify-between hover:bg-gray-300 cursor-pointer">
            <li className="py-5 px-10">Patterns</li>
            <img className="pr-10" src={downArrow} alt="" />
          </div>
          <div className=" flex justify-between hover:bg-gray-300 cursor-pointer">
            <li className="py-5 px-10">Layouts</li>
            <img className="pr-10" src={downArrow} alt="" />
          </div>
          <div className=" flex justify-between hover:bg-gray-300 cursor-pointer">
            <li className="py-5 px-10">Templates</li>
            <img className="pr-10" src={downArrow} alt="" />
          </div>
          <div className=" flex justify-between hover:bg-gray-300 cursor-pointer">
            <li className="py-5 px-10">Downloads</li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
