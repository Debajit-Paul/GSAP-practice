import { Menu_links, Menu_socials } from "@/app/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import "./Submenu.css";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    translateY: 0,
    translateX: 0,
    rotateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const Submenu = ({ setIsActive, isActive }) => {
  return (
    <div className="h-full pt-[90px] sm:pt-[80px] md:pt-[100px] px-[35px] sm:px-[40px] pb-[30px] sm:pb-[50px] flex flex-col justify-between ">
      <div className="flex flex-col">
        {Menu_links.map((link, i) => (
          <div
            key={i}
            className="linksContainer relative"
            onClick={() => setIsActive(!isActive)}
          >
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link
                href={link.href}
                className="text-black text-[36px] sm:text-[36px] md:text-[46px] link relative"
              >
                {link.title}
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap">
        {Menu_socials.map((social, i) => (
          <motion.div
            key={`social_${i}`}
            variants={slideIn}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-black w-[50%]"
            onClick={() => setIsActive(!isActive)}
          >
            <Link href={social.href}>{social.title}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
