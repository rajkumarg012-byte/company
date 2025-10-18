import React from "react";
import logo from "../assets/ezgif-447aede9ddd9e1.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-all duration-700">
      <div className="relative flex flex-col items-center justify-center text-center">
        
        {/* Logo Image */}
        <img
          src={logo}
          alt="Loading Logo"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain"
        />

        {/* Loading Text */}
        <p className="text-cyan-500 mt-4 text-sm sm:text-base md:text-lg tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
