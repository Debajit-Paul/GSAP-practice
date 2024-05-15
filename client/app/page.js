"use client";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Team from "./components/Team/Team";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Clients />
      <Team />
    </>
  );
}
