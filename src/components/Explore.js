import React from "react";
import CustomImage from "./CustomImage";
import explore1 from "../assets/explore-1.webp";
import explore2 from "../assets/explore-2.webp";

const customImageVal = [
  {
    img: explore1,
    text: "Room with one king-size bed",
    price: "35$",
    area: "28м²",
  },
  {
    img: explore2,
    text: "Penthouse for 8 person",
    price: "2039$",
    area: "438м²",
  },
];

const Explore = () => {
  return (
    <div
      id="explore"
      className="flex flex-col pt-10 lg:pt-20 pb-20 px-5 lg:px-[50px] max-w-6xl m-auto box-border"
    >
      <div
        className="text-[64px] font-bold flex"
        style={{ lineHeight: "110%" }}
      >
        Explore
      </div>
      <div
        className="flex text-lg font-normal mt-[25px]"
        style={{ lineHeight: "100%" }}
      >
        From one-guest rooms to
      </div>
      <div className="flex text-lg font-normal" style={{ lineHeight: "100%" }}>
        penthouses with pools and gardens
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-between mt-14">
        {customImageVal.map((e, index) => (
          <CustomImage
            className={`flex ${index === 0 && "lg:mr-[30px]"} ${
              index === 1 && "mt-[86px] lg:mt-0"
            }`}
            src={e.img}
            alt={"Explore " + (index + 1)}
            key={index}
          >
            <div
              className="flex text-sm lg:text-lg font-normal"
              style={{ lineHeight: "110%" }}
            >
              <div className="flex flex-col">
                {e.text}
                <div className="flex mt-3">
                  <span
                    className="w-16 lg:w-20 h-[30px] flex justify-center items-center rounded-[10px] mr-6 lg:mr-9"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF594C 0%, #FAC527 100%)",
                    }}
                  >
                    {e.price}
                  </span>
                  <span
                    className="w-16 lg:w-20 h-[30px] flex justify-center items-center rounded-[10px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF594C 0%, #FAC527 100%)",
                    }}
                  >
                    {e.area}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 justify-end items-end">
                <button
                  className="h-[40px] lg:h-[50px] w-[70px] lg:w-[100px] text-base lg:text-[18px] font-medium rounded-[10px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF594C 0%, #FAC527 100%)",
                    lineHeight: "110%",
                  }}
                >
                  Book!
                </button>
              </div>
            </div>
          </CustomImage>
        ))}
      </div>
    </div>
  );
};

export default Explore;
