import React from "react";
import logo from "../assets/logo.png";
import { ReactComponent as BottomCaret } from "../assets/svg/bottom-caret.svg";

const Header = () => {
  return (
    <header className="flex h-20 px-[50px] pt-6">
      <img src={logo} alt="Logo" />
      <div
        style={{ lineHeight: "22px" }}
        className="flex justify-center items-center ml-auto text-white font-medium text-xl"
      >
        <div className="mr-[18px] p-[18px] cursor-pointer">Explore</div>
        <div className="mr-[18px] p-[18px] cursor-pointer">About Us</div>
        <div className="flex mr-[50px] p-[18px] cursor-pointer items-center">
          Cities
          <BottomCaret width="20px" height="14px" className="ml-2" />
        </div>
        <div className="border-solid border-white border-2 rounded-[10px] py-3 px-12 cursor-pointer">
          Call
        </div>
      </div>
    </header>
  );
};

export default Header;
