import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phrases_left, Phrases_right, Services_list } from "../constants";
import Service from "./Service/Service";
import Modal from "./Modal/Modal";

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <section className="w-full padding-container relative flex flex-col gap-[10px]">
        <div className="flex flex-col md:flex-row flex-1 justify-between gap-[10vw] md:gap-[12vw] md:max-container my-[50px] md:my-[120px]">
          <div className="flex flex-col sm:items-center md:items-start">
            {Phrases_left.map((phrase, i) => {
              return (
                <div
                  key={`phrase_left_${i}`}
                  className="m-0 font-[500] text-[5.5vw] sm:text-[3.5vw] md:text-[2vw] text-green-50 leading-[7vw] sm:leading-[5.4vw] md:leading-[2.5vw]"
                >
                  <AnimatedText animation={"relative"}>{phrase}</AnimatedText>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:items-center md:items-start">
            {Phrases_right.map((phrase, i) => {
              return (
                <div
                  key={`phrase_right_${i}`}
                  className="font-[300] text-[3.7vw] sm:text-[3vw] md:text-[1vw] leading-[4.8vw] sm:leading-[3vw] md:leading-[1.6vw] m-0"
                >
                  <AnimatedText>{phrase}</AnimatedText>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col w-full items-center justify-center overflow-hidden">
          {Services_list.map((service, i) => {
            return (
              <Service
                key={`service-${i}`}
                index={i}
                title={service.title}
                src={service.src}
                description={service.description}
                subTitle={service.subTitle}
                setModal={setModal}
              />
            );
          })}
        </div>
        <Modal modal={modal} Services_list={Services_list} />
      </section>
    </>
  );
};

const AnimatedText = ({ children, animation }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "-3px bottom",
        end: "bottom+=400px bottom+=3px",
        scrub: true,
      },
    });
    timeline.from(text.current, {
      opacity: 0,
      left: "-200px",
    });
    timeline.to(text.current, {
      opacity: 1,
      left: "0px",
    });
  }, []);

  return (
    <p ref={text} className={`${animation}`}>
      {children}
    </p>
  );
};

export default Projects;
