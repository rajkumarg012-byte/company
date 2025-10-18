import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppSection = () => {
  return (
    <section className="bg-green-50 text-gray-900 py-20 px-6 sm:px-12 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-green-500 text-6xl mb-6 animate-bounce" />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Chat with Us on <span className="text-green-600">WhatsApp</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-xl">
          Have a question or need service support? We're just a message away!
          Click below to start a conversation on WhatsApp — quick, easy, and direct.
        </p>

        {/* WhatsApp CTA Button */}
        <a
          href="https://wa.me/917350832152"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-green-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default WhatsAppSection;
