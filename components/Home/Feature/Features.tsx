import React from "react";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";
import CardFeatur from "./CardFeatur";
import Image from "next/image";
import { GoWorkflow } from "react-icons/go";
import { LuPin } from "react-icons/lu";

const Features = () => {
  return (
    <section id="Features" className="py-16 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl text-blue-950 font-bold">
          Key Features Of The Product
        </h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-1/2">
          Our product stands out with its high performance, delivering
          blazing-fast speeds and seamless multitasking
        </p>
      </div>

      {/* Main grid */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Inner grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <CardFeatur
            title="App Integration"
            disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero"
            Icon={LuPin}
          />

          <CardFeatur
            title="Workflow Builder"
            disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero"
            Icon={MdOutlineTouchApp}
          />

          <CardFeatur
            title="Problem Solution"
            disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero"
            Icon={GoWorkflow}
          />

          <CardFeatur
            title="Lifetime Access"
            disc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse amet possimus debitis assumenda libero"
            Icon={MdAccessAlarm}
          />
        </div>
        {/* Image content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <Image
            className="imgAnim w-full mx-auto sm:w-5/6 md:w-4/6 lg:w-[60%] xl:w-full"
            src="/images/f1.png"
            alt="feature"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
