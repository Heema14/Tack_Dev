import { navLink } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const MobileNav = ({
  closeNav,
  showNav,
}: {
  showNav: boolean;
  closeNav: () => void;
}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <section>
      {/* Ovelay */}
      <div
        onClick={closeNav}
        className={`fixed ${navOpen} inset-0 transform transition-all duration-300 z-[1002] bg-black opacity-70 w-full h-screen`}
      >
        {/* navLink */}
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`text-white ${navOpen} fixed pt-6 flex flex-col h-full transform transition-all justify-center gap-7 duration-300 delay-300 w-[80%] sm:w-[64%] bg-blue-900 z-[1050]`}
        >
          {/* logo */}
          <a href="#" className="flex items-center mb-4 translate-x-4 gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-col">
              <GrTechnology className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-lg block md:text-2xl text-white font-semibold">
              TechDev
            </h1>
          </a>

          <div className="space-y-2">
            {navLink.map((l) => {
              return (
                <Link
                  href={l.url}
                  key={l.id}
                  className="flex items-center duration-300 hover:pl-3 w-1/3 translate-x-4 group"
                >
                  <span className="opacity-0 translate-x-[-10px] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <IoIosArrowForward />
                  </span>
                  <span className="text-white hover:text-gray-300 w-fit text-base ml-3 sm:text-xl">
                    {l.label}
                  </span>
                </Link>
              );
            })}

            <hr className="w-[80%] mt-2 translate-x-6 rounded" />
          </div>

          <div className="flex items-center translate-x-10 space-x-4 mt-4">
            <span className="font-semibold text-white">Social: </span>
            <a
              href="#"
              className="text-gray-100 duration-200 text-lg hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-100 duration-200 text-lg hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-100 duration-200 text-lg hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-100 duration-200 text-lg hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>

          <CgClose
            onClick={closeNav}
            className="absolute top-3 right-6 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          />
        </ul>
      </div>
    </section>
  );
};

export default MobileNav;
