import React from "react";
import BoxText from "../About/BoxText";
import CardServ from "./CardServ";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";

const Services = () => {
  return (
    <section id="Services" className="py-16">
      <div className="w-[80%] mx-auto">
        <BoxText txt="Our Services" />
        {/* Heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Our Services Made For You
        </h1>
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-1/2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          veniam ab sunt fugiat, deserunt amet repudiandae ullam blanditiis
          distinctio maxime heema is nice?
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          <CardServ txt="Stars Up" Icon={MdOutlineDesignServices} />
          <CardServ txt="Digital Design" Icon={IoColorPaletteOutline} />
          <CardServ txt="Bussiness" Icon={FaShoppingCart} />
          <CardServ txt="Unlimited Colors" Icon={FaRocket} />
          <CardServ txt="E-commerce" Icon={FaChess} />
          <CardServ txt="Strategy Solution" Icon={FaBriefcase} />
        </div>
      </div>
    </section>
  );
};

export default Services;
