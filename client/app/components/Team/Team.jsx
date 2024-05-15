import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Team.css";
import { Team_list } from "@/app/constants";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Team = () => {
  const main = useRef(null);
  const top = useRef(null);
  const center = useRef(null);
  const bottom = useRef(null);
  const top_h1 = useRef(null);
  const bottom_h1 = useRef(null);
  const content = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "50% 50%",
          end: "150% 50%",
          scrub: 2,
          pin: true,
        },
      });

      tl.to(
        center.current,
        {
          height: "100vh",
        },
        "a"
      )
        .to(
          top.current,
          {
            top: "-50%",
          },
          "a"
        )
        .to(
          bottom.current,
          {
            bottom: "-50%",
          },
          "a"
        )
        .to(
          top_h1.current,
          {
            bottom: "-15%",
          },
          "a"
        )
        .to(
          bottom_h1.current,
          {
            top: "-15%",
          },
          "a"
        )
        .to(
          content.current,
          {
            marginTop: "0%",
          },
          "a"
        );
    },
    { scope: main }
  );

  return (
    <section ref={main} className="w-full h-screen relative overflow-hidden">
      <div
        ref={top}
        className=" absolute bg-white top-0 w-full h-[50vh] z-20 overflow-hidden flex items-center justify-center"
      >
        <h1
          ref={top_h1}
          className="text-[15.2vw] md:text-[9vw] text-green-50 font-[600] absolute bottom-[-11.3vw] md:bottom-[-6.8vw]"
        >
          OUR TEAM
        </h1>
      </div>

      <div
        ref={center}
        className="center relative w-full h-screen overflow-hidden bg-green-50 "
      >
        <div
          ref={content}
          className="flex flex-col items-center justify-center w-full h-screen gap-[36px] md:gap-[85px] mt-[100%]"
        >
          <h2 className="text-[4vw] sm:text-[3vw] md:text-[27px] font-[500] text-center text-white w-[80%] ">
            We have the best minds in place, dedicated to supporting you and
            your goals.
          </h2>

          <div className="max-container padding-container grid grid-cols-2 md:grid-cols-4 gap-[7.8vw] sm:gap-[3.7vw] md:gap-[2vw]">
            {Team_list.map((team) => (
              <div
                key={`team_list_${team.id}`}
                className="flex flex-col gap-[0.3rem] md:gap-2"
              >
                <Image
                  src={`/${team.src}`}
                  alt="team_logo"
                  width={270}
                  height={370}
                  className="border-[3px] border-blue-50 max-sm:w-[170px] max-md:w-[200px]"
                />
                <p className="text-white font-[500] text-[17px] md:text-[20px] md:ml-[20px]">
                  {team.name}
                </p>
                <p className="text-white font-[400] text-[12px] md:text-[15px] md:ml-[20px] italic">
                  {team.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={bottom}
        className="absolute bg-white bottom-0 w-full h-[50vh] overflow-hidden flex items-center justify-center"
      >
        <h1
          ref={bottom_h1}
          className="text-[15.2vw] md:text-[9vw] text-green-50 font-[600] absolute top-[-11.3vw] md:top-[-6.8vw]"
        >
          OUR TEAM
        </h1>
      </div>
    </section>
  );
};

export default Team;
