import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="mx-auto w-[80%] text-center">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-950">{title}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
};

export default SectionHeader;
