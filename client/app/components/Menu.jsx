"use client";
import React, { useEffect } from "react";
import Button from "./Button/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import Submenu from "./Submenu/Submenu";

const variantsDesktop = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const variantsMobile = {
  open: {
    width: "96vw",
    height: "515px",
    top: "-14px",
    right: "-14px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "80px",
    height: "35px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const Menu = ({ menuBg }) => {
  const [isActive, setIsActive] = useState(false);

  const getVariant = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 950 ? variantsMobile : variantsDesktop;
    }
    return variantsDesktop;
  };

  return (
    <div className=" absolute right-[22px] md:right-[80px] top-[25px] md:top-[50px] z-0">
      <motion.div
        className={`w-[480px] h-[650px] rounded-[25px] ${
          menuBg ? "bg-blue-50" : "bg-green-50"
        } relative`}
        variants={getVariant()}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && <Submenu setIsActive={setIsActive} isActive={isActive} />}
      </motion.div>
      <Button
        isActive={isActive}
        setIsActive={setIsActive}
        menuBg={menuBg}
        openText={"Menu"}
        closedText={"Close"}
      />
    </div>
  );
};

export default Menu;
