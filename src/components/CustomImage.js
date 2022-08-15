import React from "react";

const CustomImage = ({ src, alt, className, children }) => {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <img src={src} alt={alt || "Custom Image"} className="rounded-[25px]" />
      <div
        className="w-[90%] lg:w-[80%] h-20 lg:h-[100px] absolute bottom-[-50px] rounded-[15px] px-[21px] py-[10px] lg:py-[15px]"
        style={{
          background:
            "linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: "rgba(179, 179, 179, 0.3)",
          borderTopColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomImage;
