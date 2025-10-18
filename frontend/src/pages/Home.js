import React from "react";
import { motion } from "framer-motion";
import scrollToSection from "../features/scrollSection";
import service from '../assets/ChatGPT Image Oct 18, 2025, 01_21_22 PM.png'
import cleaning1 from '../assets/Cleaning-Service-in-BTM-Layout-1.jpg';
import cleaning2 from '../assets/cleaning.jpg';

const Home = () => {
  return (
    <>
    <section
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://mooka.ie/img/sliderimages/slider-services-background.jpg')", // place your image in /public/images/
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-5xl font-extrabold uppercase tracking-wider leading-tight text-white font-orbitron"
        >
          U.G. Services <br /> & Management:
          <br />
          <span className="normal-case text-2xl md:text-3xl font-semibold text-gray-300 block mt-3 font-poppins">
            Your Partner in Professional Care
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 mt-6 max-w-xl text-lg mx-auto leading-relaxed"
        >
          Unmatched quality, guaranteed satisfaction for your home and business
          needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <button
          onClick={()=>scrollToSection('services')}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded shadow-md transition-all duration-300">
            View Our Services
          </button>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold px-6 py-3 rounded transition-all duration-300">
            Book An Appointment
          </button>
        </motion.div>
      </div>
    </section>





<section className="bg-black text-white py-16 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Curved Image Grid */}
   <div className="relative grid grid-cols-2 gap-4 rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px]">
  {/* Left Column - Two small images stacked */}
  <div className="grid grid-rows-2 gap-4">
    <img
      src={cleaning1}
      alt="Service 1"
      className="w-full h-full object-cover rounded-tl-3xl"
    />
    <img
      src={cleaning2}
      alt="Service 2"
      className="w-full h-full object-cover rounded-bl-3xl"
    />
  </div>

  {/* Right Column - One large vertical image */}
  <div className="h-full w-full">
    <img
      src={service}
      alt="Service 3"
      className="w-full h-full object-cover rounded-tr-3xl rounded"
    />
  </div>

  {/* Optional overlay for modern look */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
</div>


    {/* Right: Text Content */}
    <div className="text-left space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
        Professional Maintenance Solutions
      </h2>
      <p className="text-gray-300">
        At{" "}
        <span className="text-cyan-400 font-semibold">
          UG Services & Management
        </span>
        , we deliver top-quality maintenance, repair, and facility management
        services with efficiency and professionalism. Our experienced team
        ensures seamless service across residential, commercial, and industrial
        spaces.
      </p>
      <ul className="text-gray-300 space-y-2">
        <li>✅ Fast and Reliable Service</li>
        <li>✅ Trained Local Professionals</li>
        <li>✅ Affordable and Transparent Pricing</li>
      </ul>
      {/* <button className="mt-4 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition">
        Learn More
      </button> */}
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
