import React from "react";
import homeHero from "../assets/home-hero-desktop.webp";
import wave from "../assets/wave.webp";
import Header from "./Header";
import { ReactComponent as Search } from "../assets/svg/search.svg";
import { ReactComponent as BottomCaret } from "../assets/svg/bottom-caret.svg";

const HomeHero = () => {
  return (
    <div
      style={{ backgroundImage: `url("${homeHero}")` }}
      className="h-[700px] relative bg-no-repeat bg-cover"
    >
      <Header />
      <div className="flex flex-col lg:px-10 pt-10 items-center max-w-5xl m-auto">
        <div
          className="flex text-center items-center text-[52px] lg:text-[100px] text-white font-bold lg:px-10 pt-10 pb-5"
          style={{ lineHeight: "110%" }}
        >
          Rethink your living & renting
        </div>
        <div className="text-white font-bold text-xl lg:text-3xl">
          Make your stay painless with us
        </div>
        <div
          className="flex flex-col lg:flex-row lg:w-full w-[95%] rounded-[30px] px-[18px] py-[15px] mt-[37px] lg:mt-20"
          style={{
            background:
              "linear-gradient(94.43deg, rgba(249, 249, 249, 0.49) 34.95%, rgba(249, 249, 249, 0.175) 67.01%)",
            backdropFilter: "blur(10px)",
            border: "1px solid",
            borderColor: "rgba(255, 255, 255, 1)",
          }}
        >
          <div className="flex flex-1 flex-col lg:h-[70px] rounded-2xl bg-white lg:mr-3 items-start px-3 py-2 justify-between h-[60px] mb-[7px] lg:mb-auto">
            <span
              className="text-base font-normal text-[#6D6D6D]"
              style={{ lineHeight: "110%" }}
            >
              CITY
            </span>
            <span
              className="text-[22px] font-normal"
              style={{ lineHeight: "110%" }}
            >
              Select your city
            </span>
          </div>
          <div className="flex flex-1 flex-col lg:h-[70px] rounded-2xl bg-white lg:mr-3 items-start px-3 py-2 justify-between h-[60px] mb-[7px] lg:mb-auto">
            <span
              className="text-base font-normal text-[#6D6D6D]"
              style={{ lineHeight: "110%" }}
            >
              DATES
            </span>
            <span
              className="text-[22px] font-normal"
              style={{ lineHeight: "110%" }}
            >
              Select your dates
            </span>
          </div>
          <div className="flex flex-1 flex-col lg:h-[70px] rounded-2xl bg-white lg:mr-3 items-start px-3 py-2 justify-between h-[60px] mb-[7px] lg:mb-auto">
            <span
              className="text-base font-normal text-[#6D6D6D]"
              style={{ lineHeight: "110%" }}
            >
              GUESTS
            </span>
            <span
              className="text-[22px] font-normal"
              style={{ lineHeight: "110%" }}
            >
              Add guests
            </span>
          </div>
          <div
            className="flex flex-1 lg:h-[70px] py-[15px] lg:py-0 rounded-2xl bg-white text-white 
            font-medium text-[26px] justify-center items-center"
            style={{
              background: "linear-gradient(90deg, #FF594C 0%, #FAC527 100%)",
              lineHeight: "110%",
            }}
          >
            <Search className="mr-2 font-bold" height="30px" width="30px" />
            Search
          </div>
        </div>
      </div>
      <BottomCaret
        className="m-auto mt-4 lg:mt-8 font-bold"
        width="35px"
        height="24.5px"
      />
      <img
        src={wave}
        alt="Wave"
        className="absolute bottom-[-2px] w-full flex"
      />
    </div>
  );
};

export default HomeHero;
