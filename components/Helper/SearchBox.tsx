"use client";

import React from "react";
import { FaCalendarWeek, FaMap } from "react-icons/fa";
import Inputs from "../Home/Hero/Inputs";
import { FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 mt-8 sm:mt-12 w-[95%] sm:w-[80%]"
    >
      <Inputs
        icon={FaMap}
        txt="Location"
        type="text"
        placeholder="Where are you going?"
      />
      <Inputs
        icon={FaCalendarWeek}
        type="date"
        txt="Start Date"
        placeholder=""
      />
      <Inputs icon={FaCalendarWeek} type="date" txt="End Date" placeholder="" />
      <div className="flex items-center space-x-6">
        <FaUserGroup className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-1">Guest</p>
          <p className="text-base font-normal text-gray-400">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
