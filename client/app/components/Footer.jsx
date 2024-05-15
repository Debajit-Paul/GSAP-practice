import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="max-container px-6 flexBetween flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 my-[5rem] max-md:gap-[40px]">
        <div className="flex flex-col gap-[20px] pl-[15px] pt-[10px] pr-[50px]">
          <Image src="/logo.png" alt="logo" width={150} height={40} />
          <p className="text-[18px] font-normal leading-[28px]">
            Pushing the boundaries of innovation to deliver intelligent outcomes
            for our clients.
          </p>
          <p className="text-[14px] text-[#54555c] leading-[23px] font-[400] md:mt-[20px] ">
            Innovating with precision, we engineer customized solutions infused
            with advanced data analytics. Our commitment to excellence drives us
            to craft end-to-end strategies that propel businesses forward in
            today’s dynamic landscape. Focused on delivering tangible results,
            we foster enduring partnerships grounded in trust and creativity.
          </p>
        </div>

        <div className="flex flex-col gap-[20px] max-md:pl-[15px]">
          <p className="text-[18px] font-normal leading-[28px] md:mb-[20px]">
            Contact Us
          </p>
          <div className="flex flex-col gap-[3px]">
            <p className="text-[14px] font-[300]">India. : +91 7777777777</p>
            <p className="text-[14px] font-[300]">Malaysia. : +60 9999999999</p>
            <p className="text-[14px] font-[300]">
              E-mail : connect@company.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] max-md:pl-[15px]">
          <h2 className="text-[18px] font-normal leading-[28px]">
            Sign up for newsletter and be informed about our latest updates
          </h2>
          <div className="w-[90%] md:w-full p-[0.5rem] md:p-4 border border-[#e6e7ec] flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter your e-mail address"
              className="w-[75%] text-[1rem] text-[#55595c] px-[0.6rem] py-[0.7rem] placeholder:text-[.8rem] outline-none"
            />
            <button className=" bg-green-50 rounded-full h-[60px] w-[60px] flex justify-center items-center">
              <Image src="/arrow.svg" width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
