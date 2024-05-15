import React from "react";
import "./Service.css";
import Image from "next/image";
const Service = ({ index, title, src, description, subTitle, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="w-full flex flex-col md:flex-row max-md:gap-[30px] items-center justify-between py-[25px] md:py-[50px] px-[25px] md:px-[100px] border-t border-[#c9c9c9] cursor-pointer serviceContainer transition-all duration-300"
    >
      <Image
        src={`/${src}`}
        alt="image"
        width={260}
        height={0}
        className="block sm:hidden h-auto w-full p-2 border-[3px] border-green-50"
      />
      <div className="flex flex-col max-md:items-center transition-all duration-300">
        <h2 className="text-[30px] md:text-[60px] m-0 font-[400]">{title}</h2>
        <p className="text-[18px] max-md:text-center md:text-[20px] font-[300] text-green-50">
          {subTitle}
        </p>
      </div>
      <p className="font-[300] w-[80%] md:w-[30%] transition-all duration-300">
        {description}
      </p>
    </div>
  );
};

export default Service;
