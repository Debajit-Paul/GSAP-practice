import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "./Hero.css";

const Hero = () => {
  const backgroundVideo = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=600px",
        scrub: true,
      },
    });

    timeline.to(backgroundVideo.current, { transform: "scale(2)" });
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <video
        src="./particle.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-screen"
        ref={backgroundVideo}
      ></video>
      <div className="w-full h-screen bg-overlay absolute top-0 z-10"></div>
      <div className="max-container padding-container absolute top-1/2 left-1/2 [transform:translate(-50%,-45%)]  text-wrap text-center z-20">
        <h1
          data-scroll
          data-scroll-speed="0.4"
          className="text-[#dfdbeb] text-[5.9vw] leading-[12vw] sm:leading-[6vw] tracking-[6.46px] font-[800] uppercase italic"
          id="hero_text"
        >
          Transform Your Business Challenges into Milestones
        </h1>
      </div>
    </section>
  );
};

export default Hero;
