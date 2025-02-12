import Image from "next/image";
import React from "react";

type Prop = {
  image: string;
  title: string;
  date: string;
};

const NewsCard = ({ image, title, date }: Prop) => {
  return (
    <div>
      <div className="h-72">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full rounded-lg object-cover hover:scale-105 duration-300"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-gray-950 text-lg font-semibold transition-all duration-300 hover:text-blue-950 cursor-pointer">
          {title}
        </h1>
        <p className="text-gray-600 text-sm mt-2">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
