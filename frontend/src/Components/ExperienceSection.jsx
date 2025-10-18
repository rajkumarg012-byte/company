import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center py-24 px-4"
      style={{ backgroundImage: "url('https://tse1.mm.bing.net/th/id/OIP.lcHHLTv7Hi1G6kEzBecqWwHaBQ?pid=Api&P=0&h=220')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-screen-md mx-auto z-10">
        <h2 className="text-3xl md:text-4xl text-white mb-4 font-orbitron">
          Ready to Experience Our Services?
        </h2>

        <p className="text-gray-300 mb-8">
          Book your appointment today and let us handle your needs with
          expertise and care.
        </p>

        {/* Button */}
        <button
          className="flex items-center justify-center gap-2 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 
                     text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg 
                     hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
        >
          <FaBriefcase className="text-lg" />
          Book Your Service Now
        </button>

        {/* Link below */}
        <a
          href="#contact"
          className="block mt-6 text-teal-400 hover:text-teal-300 underline transition-all duration-200"
        >
          Contact Us for more information
        </a>
      </div>
    </section>
  );
}
