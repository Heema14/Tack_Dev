import Image from "next/image";
import React from "react";

const WhyChooseCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="text-center w-80 h-60 flex flex-col justify-center items-center hover:shadow-lg duration-300 py-6 px-4 rounded-2xl border">
      <Image src={image} alt={title} width={70} height={70} />
      <h1 className="mt-6 text-gray-900 font-medium text-lg">{title}</h1>
      <p className="mt-2 text-xs font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing Fugiat totam cum
        eveniet sequi!
      </p>
    </div>
  );
};

export default WhyChooseCard;
