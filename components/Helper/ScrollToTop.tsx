"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisable, setIsVisible] = useState(false);

  useEffect(() => {
    const tiggleView = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", tiggleView);
    return () => window.removeEventListener("scroll", tiggleView);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <aside className="fixed bottom-4 animate-pulse right-4">
      {isVisable && (
        <button
          onClick={scrollToTop}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </aside>
  );
};

export default ScrollToTop;
