"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Features from "./Feature/Features";
import Services from "./Services/Services";
import ClientReview from "./ClientReview/ClientReview";
import Team from "./Team/Team";
import Pricing from "./Pricing/Pricing";
import SwiperSec from "./Swiper/SwiperSec";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Services />
      <SwiperSec />
      <ClientReview />
      <Team />
      <Pricing />
    </main>
  );
};

export default Home;
