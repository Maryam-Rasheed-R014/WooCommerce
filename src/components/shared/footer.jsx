import React from "react";
import facebook from "../../assets/images/facebook.svg"
import insta from "../../assets/images/insta.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedin from "../../assets/images/linkedin.svg"
import wifi from "../../assets/images/wifi.svg"
import Button from "../shared/button";
export default function Footer() {
  return (
    <>
      <section id="footer" className="bg-[var(--bg-dark)] text-[var(--light)]  ">
        <div className="container max-w-[85%] mx-auto  grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-5   py-15  font-manrope  ">
         
         
            <div className="col-span-2  flex justify-between" ><div className="text-left">
              <h2 className="font-bold text-[2em]">Get Started with LSX</h2>
              <p className="py-5 my-5 text-md">
                With its clean, minimal design and powerful feature set, LSX
                theme enables agencies to build stylish and sophisticated
                WordPress websites.
              </p>
               <Button text="View Demo "className="demoButton" />
            </div>
          </div>
      <div className="flex justify-start md:justify-center">
  <div className="text-left">
    <h3 className="font-semibold text-[1.1em] pt-2">Theme</h3>
    <ul className="flex flex-col pt-7 text-sm  space-y-2">
      <li>Styles</li>
      <li>Patterns</li>
      <li>Layouts</li>
      <li>Templates</li>
      <li>Docs</li>
      <li>Download</li>
    </ul>
  </div></div>


          <div className="flex  justify-start md:justify-center"> <div className="text-left">
            <h3 className="font-semibold pt-2 text-[1.1em]">LightSpeed</h3>
            <ul className="pt-7 text-sm space-y-2 ">
              <li>Solutions</li>
              <li>Services</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
             
            </ul></div>
          </div>
          <div className="flex justify-start md:justify-center"><div className="text-left">
            <h3 className="font-semibold text-[1.1em] pt-2">Products</h3>
            <ul className="pt-7 text-sm space-y-2">
              <li>Solutions</li>
              <li>Services</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Download</li>
            </ul></div>
          </div>
        </div>
     <hr className="border-t-2 border-[var(--border-light)] " />
     <div className="contact container max-w-[85%] mx-auto grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-5 py-3">
      <div className="theme col-span-2"><p className="text-[var(--light)]  text-sm">© LSX Theme</p></div>
      <div className="privicy col-span-2"><p className="text-[var(--light)] text-sm">Privacy Policy-Terms & Conditions</p></div>
      <div className="social gap-0 sm:gap-0 space-y-0 grid grid-cols-10 sm:grid-cols-5">
      <img  className="rounded-full w-[18px] h-[18px]  bg-[var(--bg-light)] border-2"src={facebook} alt="" />
      <img  className="rounded-full w-[18px] h-[18px]  bg-[var(--bg-light)] border-2"src={insta} alt="" />
      <img  className="rounded-full w-[18px] h-[18px]  bg-[var(--bg-light)] border-2"src={twitter} alt="" />
      <img  className="rounded-full w-[18px] h-[18px]  bg-[var(--bg-light)] border-2"src={linkedin} alt="" />
      <img  className="rounded-full w-[18px] h-[18px]  bg-[var(--bg-light)] border-2"src={wifi} alt="" />
      </div>
     </div>
      </section>   

    </>
  );
}
