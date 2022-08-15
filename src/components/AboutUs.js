import React from "react";
import CustomImage from "./CustomImage";
import aboutUs1 from "../assets/about-us-1.png";
import aboutUs2 from "../assets/about-us-2.png";
import aboutUs3 from "../assets/about-us-3.png";
import aboutUs4 from "../assets/about-us-4.png";

const customImageVal = [
  {
    img: aboutUs1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    heading: "Chapter I",
  },
  {
    img: aboutUs2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    heading: "Chapter II",
  },
  {
    img: aboutUs3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    heading: "Chapter III",
  },
  {
    img: aboutUs4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    heading: "Chapter IV",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col pt-20 px-[50px] max-w-6xl m-auto box-border">
      <div
        className="text-[64px] font-bold flex"
        style={{ lineHeight: "110%" }}
      >
        About Us
      </div>
      <div
        className="flex text-lg font-normal mt-[25px]"
        style={{ lineHeight: "100%" }}
      >
        Allow us to tell you a short story...
      </div>
      <div className="flex mt-14">
        <div className="flex flex-col flex-1 mr-[30px]">
          {[customImageVal[0], customImageVal[2]].map((au, index) => (
            <CustomImage
              src={au.img}
              alt={"About us " + index + 1}
              key={index}
              className={`${index === 1 && "mt-[86px]"}`}
            >
              <div className="flex flex-col items-start">
                <span
                  className="text-2xl font-bold"
                  style={{ lineHeight: "110%" }}
                >
                  {au.heading}
                </span>
                <span
                  className="text-sm font-light mt-[13px] text-start"
                  style={{ lineHeight: "110%" }}
                >
                  {au.text}
                </span>
              </div>
            </CustomImage>
          ))}
        </div>
        <div className="flex flex-col flex-[1.25]">
          {[customImageVal[1], customImageVal[3]].map((au, index) => (
            <CustomImage
              src={au.img}
              alt={"About us " + index + 1}
              key={index}
              className={`${index === 1 && "mt-[86px]"}`}
            >
              <div className="flex flex-col items-start">
                <span
                  className="text-2xl font-bold"
                  style={{ lineHeight: "110%" }}
                >
                  {au.heading}
                </span>
                <span
                  className="text-sm font-light mt-[13px] text-start"
                  style={{ lineHeight: "110%" }}
                >
                  {au.text}
                </span>
              </div>
            </CustomImage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
