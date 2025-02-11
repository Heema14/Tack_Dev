import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Scoial = ({
  label,
  rating,
  icon,
}: {
  label: string;
  rating: number;
  icon: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center space-x-4">
        <Image src={icon} alt={label} width={40} height={40} />
      </div>

      <div className="flex flex-col ">
        <div className="flex gap-2 items-center">
          <h1 className="text-lg sm:text-xl text-gray-700 font-semibold">
            {rating}
          </h1>
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <BsStarHalf className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base">{label}</p>
      </div>
    </div>
  );
};

export default Scoial;
