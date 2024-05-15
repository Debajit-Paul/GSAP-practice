import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Button.css";
import { getCalApi } from "@calcom/embed-react";

const Button = ({ isActive, setIsActive, menuBg, openText, closedText }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return openText === "Menu" ? (
    <div
      onClick={() => openText === "Menu" && setIsActive(!isActive)}
      className="w-[80px] h-[35px] sm:w-[100px] sm:h-[40px] rounded-[25px] cursor-pointer absolute top-0 right-0 overflow-hidden "
    >
      <motion.div
        className="h-full w-full relative"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={`h-full w-full ${
            menuBg ? "bg-blue-50" : "bg-green-50"
          } uppercase element`}
        >
          <PerspectiveText lable={openText} />
        </div>
        <div className="h-full w-full absolute top-full bg-black text-white uppercase element">
          <PerspectiveText lable={closedText} />
        </div>
      </motion.div>
    </div>
  ) : (
    <>
      <button
        data-cal-namespace={""}
        data-cal-link={"debajit-paul-cw7bf2/30min"}
        data-cal-config={'{"layout":"month_view"}'}
        className={`w-[100px] h-[35px] sm:w-[125px] sm:h-[40px] rounded-[25px] cursor-pointer absolute top-[25px] md:top-[50px] right-[110px] sm:right-[150px] md:right-[200px] overflow-hidden ${
          menuBg ? "bg-blue-50" : "bg-green-50"
        } z-10`}
      >
        {openText}
        {/* <motion.div
          className="h-full w-full relative pointer-events-none"
          animate={{ top: isActive ? "-100%" : "0" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className={`h-full w-full ${
              menuBg ? "bg-blue-50" : "bg-green-50"
            } uppercase element`}
          >
            <PerspectiveText lable= />
          </div>
          <div className="h-full w-full absolute top-full bg-black text-white uppercase element">
            <PerspectiveText lable={closedText} />
          </div>
        </motion.div> */}
      </button>
    </>
  );
};

const PerspectiveText = ({ lable }) => {
  return (
    <div className="w-full h-full flex items-center justify-center perspectiveText">
      <p className="perspective1">{lable}</p>
      <p className="absolute perspective2">{lable}</p>
    </div>
  );
};

export default Button;
