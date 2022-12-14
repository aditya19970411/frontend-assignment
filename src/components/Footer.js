import React from "react";
import logo from "../assets/logo-black.webp";

const Footer = () => {
  return (
    <footer className="flex px-6 lg:px-24 mt-10 lg:mt-36 mb-5 lg:mb-[37px] flex-wrap">
      <div className="flex flex-col">
        <img src={logo} alt="Logo" />
        <span
          className="text-xs lg:text-sm font-light text-start mt-3 lg:mt-[34px]"
          style={{ lineHeight: "132%" }}
        >
          © 2021 Company Name
        </span>
        <span
          className="text-sm font-light text-start"
          style={{ lineHeight: "132%" }}
        >
          All rights reserved
        </span>
      </div>
      <div className="flex flex-1 ml-auto max-w-2xl lg:text-xl text-base">
        <span
          className="flex flex-1 justify-start lg:justify-center items-center font-medium"
          style={{ lineHeight: "110%" }}
        >
          Explore
        </span>
        <span
          className="flex flex-1 justify-center items-center font-medium"
          style={{ lineHeight: "110%" }}
        >
          About Us
        </span>
        <span
          className="flex flex-1 justify-center items-center font-medium"
          style={{ lineHeight: "110%" }}
        >
          Cities
        </span>
        <span
          className="flex flex-1 justify-center items-center font-medium"
          style={{ lineHeight: "110%" }}
        >
          <span className="border-solid border-2 rounded-[10px] w-[131px] py-3 border-black">
            Call
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
