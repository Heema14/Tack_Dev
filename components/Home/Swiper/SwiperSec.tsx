"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Navigation } from "swiper/modules";
import CardSwiper from "./CardSwiper";

export default function SwiperSec() {
  return (
    <section data-aos="flip-up" className="py-12 bg-gray-100">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={3} // Default to 3 slides per view
          spaceBetween={20} // Space between slides
          loop={true} // Enable loop
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/u1.jpg"
              titel="John Doe"
              discription="John is a software developer with over 5 years of experience in building web applications. He specializes in JavaScript and React."
            />
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/u2.jpg"
              titel="Jane Smith"
              discription="Jane is a product manager with a passion for delivering exceptional user experiences. She loves working closely with design and engineering teams."
            />
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/u3.jpg"
              titel="Michael Johnson"
              discription="Michael is a UX/UI designer with a keen eye for detail. He creates intuitive and visually appealing interfaces for both mobile and web applications."
            />
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/u4.jpg"
              titel="Emily Davis"
              discription="Emily is a data scientist who specializes in machine learning and artificial intelligence. She enjoys extracting insights from complex datasets to solve real-world problems."
            />
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/t2.jpg"
              titel="Emily Davis"
              discription="Emily is a data scientist who specializes in machine learning and artificial intelligence. She enjoys extracting insights from complex datasets to solve real-world problems."
            />
          </SwiperSlide>

          <SwiperSlide className="pb-7">
            <CardSwiper
              img="/images/t1.jpg"
              titel="Emily Davis"
              discription="Emily is a data scientist who specializes in machine learning and artificial intelligence. She enjoys extracting insights from complex datasets to solve real-world problems."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
