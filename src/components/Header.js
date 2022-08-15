import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ReactComponent as BottomCaret } from "../assets/svg/bottom-caret.svg";
import { ReactComponent as Menu } from "../assets/svg/menu.svg";
import { ReactComponent as Cross } from "../assets/svg/cross.svg";

const Header = () => {
  const [show, setshow] = useState(false);
  return (
    <header className="flex h-20 lg:px-[50px] px-[30px] pt-6">
      <img src={logo} alt="Logo" />
      <div
        style={{ lineHeight: "22px" }}
        className="lg:flex justify-center items-center ml-auto text-white font-medium text-xl hidden h-full"
      >
        <a href="#explore" className="mr-[18px] p-[18px] cursor-pointer">
          Explore
        </a>
        <a href="#about-us" className="mr-[18px] p-[18px] cursor-pointer">
          About Us
        </a>
        <div className="flex mr-[50px] p-[18px] cursor-pointer items-center">
          Cities
          <BottomCaret width="20px" height="14px" className="ml-2" />
        </div>
        <div className="border-solid border-white border-2 rounded-[10px] py-3 px-12 cursor-pointer">
          Call
        </div>
      </div>
      {show ? (
        <Cross
          className="z-[51] ml-auto fixed right-[24px]"
          width="40px"
          height="35px"
          onClick={() => setshow(!show)}
        />
      ) : (
        <Menu
          className="lg:hidden ml-auto my-auto cursor-pointer"
          width="40px"
          height="35px"
          onClick={() => setshow(!show)}
        />
      )}
      <div
        className="fixed right-0 bottom-0 left-0 top-0 bg-[rgba(0,0,0,0.5)] z-50"
        style={{ visibility: show ? "visible" : "hidden" }}
        onClick={() => setshow(!show)}
      >
        <div
          className="absolute top-0 right-0 bottom-0 bg-white flex flex-col pt-28 navigation z-[51]"
          style={{ width: show ? "66%" : 0 }}
        >
          <a
            href="#explore"
            onClick={() => setshow(!show)}
            className="mr-[18px] p-[18px] cursor-pointer"
          >
            Explore
          </a>
          <a
            href="#about-us"
            onClick={() => setshow(!show)}
            className="mr-[18px] p-[18px] cursor-pointer"
          >
            About Us
          </a>
          <div className="flex p-[18px] cursor-pointer items-center justify-center">
            Cities
            <BottomCaret
              width="20px"
              height="14px"
              className="ml-2"
              fill="black"
            />
          </div>
          <div className="border-solid border-black border-2 rounded-[10px] py-3 px-12 cursor-pointer w-1/2 mx-auto">
            Call
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
