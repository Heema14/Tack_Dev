import React from "react";
import { IconType } from "react-icons";

type Component = {
  icon: IconType;
  txt: string;
  placeholder: string;
  type: string;
};

const Inputs = ({ icon: Icon, txt, placeholder, type }: Component) => {
  return (
    <div className="flex items-center space-x-6">
      <Icon className="w-6 h-6 text-blue-600" />
      <div>
        <p className="text-lg font-medium mb-1">{txt}</p>
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default Inputs;
