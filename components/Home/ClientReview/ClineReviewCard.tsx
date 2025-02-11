import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export default function ClineReviewCard({
  img,
  name,
  rating,
}: {
  img: string;
  name: string;
  rating: string;
}) {
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        className="CardRev bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg"
      >
        {/* img */}
        <div className="BxImg duration-300">
          <Image
            src={img}
            alt={name}
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold text-blue-950">{name}</h1>
          <div className="flex items-center space-x-3">
            <p className="text-2xl font-bold text-orange-500">{rating}</p>
            <div className="flex items-center">
              <FaStar className="text-yellow-600 w-4 h-4" />
              <FaStar className="text-yellow-600 w-4 h-4" />
              <FaStar className="text-yellow-600 w-4 h-4" />
              <BsStarHalf className="text-yellow-600 w-4 h-4" />
              <BsStarHalf className="text-yellow-600 w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-base text-gray-700 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            rerum recusandae sint quisquam ullam quo.
          </p>
        </div>
      </div>
    </div>
  );
}
