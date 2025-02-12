"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 transform transition-all duration-500 z-40 bg-black opacity-70 w-full h-screen ${navOpen}`}
      ></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[80%] bg-gray-900 space-y-6 z-50 ${navOpen}`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="relative text-white text-xl sm:text-3xl ml-5 font-medium w-fit after:block after:content-[''] after:absolute after:h-0.5 after:bg-gray-200 after:w-full after:scale-x-0 after:rounded-full after:hover:scale-x-100 after:transition duration-300 after:origin-bottom-left">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* Close button */}
        <div
          onClick={closeNav}
          className="sm:w-8 sm:h-8 w-6 h-6 absolute duration-200 top-8 right-6 cursor-pointer border border-gray-200 rounded-md p-0.5 hover:bg-gray-200"
        >
          <CgClose className="w-full h-full hover:text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
