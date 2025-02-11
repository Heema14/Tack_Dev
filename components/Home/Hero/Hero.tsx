import React from "react";
import Scoial from "./Scoial";
import BtnHero from "./BtnHero";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative w-full sm:h-screen pt-12 sm:pt-[24em] md:pt-[30em] lg:pt-9 bg-[url(../public/images/bg.png)] bg-cover bg-center flex justify-center flex-col"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center flex flex-col-reverse lg:flex-row gap-6">
        {/* textContent */}
        <div data-aos="fade-up" className="w-11/12">
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make the Smartest Investent.
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 font-bold text-blue-950 leading-8">
            Kickstart, Scale, and Thrive Faster with{" "}
            <span className="text-rose-700">TechDev</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            veniam nesciunt odio exercitationem, alias eius maiores tempora
            recusandae ipsam voluptas voluptatum ea ducimus voluptatibus
            provident ratione
          </p>

          {/* Routing */}
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-8 gap-5 mt-6">
            <Scoial
              icon="/images/google.png"
              rating={4.2}
              label="Best Rated On Google"
            />
            <Scoial
              icon="/images/linkedin.png"
              rating={4.7}
              label="Best Rated On Linkedin"
            />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <BtnHero
              text="Get Free Trail"
              className="bg-rose-600 hover:bg-rose-800"
            />
            <BtnHero
              text="Create Account"
              className="bg-green-400 hover:bg-green-700"
            />
          </div>
        </div>

        {/* Image content */}
        <div data-aos="fade-down" data-aos-delay="150" className="">
          <Image
            className="imgAnim w-full sm:w-[80%] md:w-[70%] lg:w-full mx-auto lg:mx-0"
            src="/images/hero.jpg"
            alt="image"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
