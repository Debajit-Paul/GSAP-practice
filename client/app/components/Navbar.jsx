"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
// import { getCalApi } from "@calcom/embed-react";
import Button from "./Button/Button";

// import Button from "./Button/Button";

const Navbar = () => {
  const [imageSrc, setImageSrc] = useState(false);
  const [menuBg, setMenuBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition >= 840 ? setImageSrc(true) : setImageSrc(false);
      scrollPosition >= 3390 ? setMenuBg(true) : setMenuBg(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full z-30 max-md:bg-[#545454]/80 max-md:backdrop-blur-2xl ">
      <div className="flexBetween padding-container relative py-5">
        <Link href="/" className="">
          <Image
            src={`/logo.png`}
            alt="logo"
            width={200}
            height={200}
            className="mt-[10px] md:mt-[25px] max-md:w-[128px] max-md:h-[35px] z-10 relative brightness-100"
          />
        </Link>
        <Button openText={"Let's Talk"} closedText={"X"} menuBg={menuBg} />
        <Menu menuBg={menuBg} />
      </div>
    </nav>
  );
};

export default Navbar;
