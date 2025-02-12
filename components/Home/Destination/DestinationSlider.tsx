"use client";

import { destinationData } from "@/data/Data";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  Largedesktop: {
    breakpoint: { max: 5000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 470 },
    items: 2,
    slidesToSlide: 1,
  },
  smallMobile: {
    breakpoint: { max: 470, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => {
        return (
          <div data-aos="zoom-in-up" key={data.id} className="m-3">
            <div className="relative h-[400px] group">
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              <Image
                src={data.image}
                alt={data.country}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-300"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold">{data.country}</h1>
              <p className="text-sm text-gray-600">
                <strong>{data.travelers}</strong> Travelers
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
