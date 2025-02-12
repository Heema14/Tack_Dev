import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex justify-center items-center flex-col">
          <FaHeart className="w-3 h-3" />
        </div>
        <div className="absolute inset-0 w-full h-full bg-black opacity-20 z-10"></div>
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 group-hover:scale-110 object-cover"
        />
      </div>
      <div className="mt-3">
        <h1 className="text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-300">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 my-3 font-medium">
          {hotel.location}
        </p>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-800 rounded-md font-bold text-white text-xs">
            {hotel.rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">
            {hotel.reviews} Reviews
          </p>
        </div>
        <p className="mt-3 text-gray-700 font-medium">
          Starting from{" "}
          <span className="font-bold text-blue-600">US ${hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
