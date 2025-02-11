import Image from "next/image";
import React from "react";
import BoxText from "./BoxText";

const About = () => {
  return (
    <section id="About" className="py-16 xl:pt-0">
      <div className="w-[80%] sm:mt-[22em] md:mt-[27em] lg:mt-0 mt-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* image content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image
            className="imgAnim w-full sm:w-[80%] md:w-[70%] lg:w-full mx-auto lg:mx-0"
            src="/images/about.png"
            alt="about"
            height={600}
            width={600}
          />
        </div>
        {/* text content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <BoxText txt="About Us" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-10 sm:leading-[1.5em]">
            Everything You Need To Grow Your Business
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            dolore? Ratione recusandae veritatis corrupti eum dicta earum! Odit
            voluptates corporis, est eos nostrum dolore libero quibusdam
            repellat facere at accusamus.?
          </p>
          <button className="mt-5 text-[#f68967] border-[#f68967] font-bold pb-1 border-b-2">
            Learn More &#8594;
          </button>
          <div className="mt-8 border-l-2 border-gray-300">
            <div className="ml-6">
              <p className="text-gray-700 font-medium">
                &quot; The many integrations that can be linked really help me
                see data from other tools I also use. &quot;
              </p>

              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/u1.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Ibrahim Yaeen</p>
                  <p className="text-gray-700 text-sm">
                    Web Development @TechDev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
