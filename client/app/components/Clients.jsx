import React, { useEffect, useRef } from "react";
import { Client_list_1, Client_list_2 } from "../constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Clients = () => {
  const firstClientList_1 = useRef(null);
  const secondClientList_1 = useRef(null);
  const firstClientList_2 = useRef(null);
  const secondClientList_2 = useRef(null);
  const slider = useRef(null);
  let xPercent_1 = 0;
  let xPercent_2 = 0;
  let direction_1 = -1;
  let direction_2 = 1;

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     scrub: 0.5,
    //     start: 0,
    //     end: window.innerHeight,
    //     onUpdate: (e) => (direction_1 = e.direction * -1),
    //   },
    //   x: "-500px",
    // });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent_1 <= -100) {
      xPercent_1 = 0;
    }
    if (xPercent_1 > 0) {
      xPercent_1 = -100;
    }
    if (xPercent_2 <= -100) {
      xPercent_2 = 0;
    }
    if (xPercent_2 > 0) {
      xPercent_2 = -100;
    }
    gsap.set(firstClientList_1.current, { xPercent: xPercent_1 });
    gsap.set(secondClientList_1.current, { xPercent: xPercent_1 });
    xPercent_1 += 0.1 * direction_1;
    gsap.set(firstClientList_2.current, { xPercent: xPercent_2 });
    gsap.set(secondClientList_2.current, { xPercent: xPercent_2 });
    xPercent_2 += 0.1 * direction_2;
    requestAnimationFrame(animation);
  };

  return (
    <section className="w-full h-[90%] md:h-[60%] relative my-[50px]">
      <div className="max-container padding-container flex items-center h-[25%] md:h-[50%] justify-center">
        <h2 className="text-[24px] text-center font-[500]">
          <span className="text-green-50">Our team</span> has impacted clients
          across diverse industries in their previous roles.
        </h2>
      </div>

      <div className="hidden md:block absolute top-[calc(60%-50px)] w-full overflow-hidden">
        <div className="flex items-center relative">
          <ClientRender
            ref={firstClientList_1}
            list={Client_list_1}
            tag={"1"}
            style_client={`relative`}
          />
          <ClientRender
            ref={secondClientList_1}
            list={Client_list_1}
            style_client={`absolute top-0 left-[100%]`}
            tag={"2"}
          />
        </div>
        <div className="flex items-center relative whitespace-nowrap">
          <ClientRender
            ref={firstClientList_2}
            list={Client_list_2}
            tag={"1"}
            style_client={`relative`}
          />
          <ClientRender
            ref={secondClientList_2}
            list={Client_list_2}
            style_client={`absolute top-0 left-[100%]`}
            tag={"2"}
          />
        </div>
      </div>

      <div className="block md:hidden absolute top-[calc(30%-20px)] w-full h-[100%] overflow-hidden">
        <div className="grid grid-cols-2 items-center justify-items-center relative">
          {Client_list_1.map((client, i) => {
            return (
              <Image
                key={`client-1-${i}`}
                src={`/${client.src}`}
                alt="client_logo"
                height={150}
                width={150}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ClientRender = React.forwardRef(({ list, style_client, tag }, ref) => {
  return (
    <div
      ref={ref}
      className={`grid grid-cols-8 w-full items-center justify-evenly ${style_client}`}
    >
      {list.map((client, i) => {
        return (
          <Image
            key={`client-${tag}-${i}`}
            src={`/${client.src}`}
            alt="client_logo"
            height={150}
            width={150}
          />
        );
      })}
    </div>
  );
});

export default Clients;
