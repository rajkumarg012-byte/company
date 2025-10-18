import React from "react";
import {
  FaFaucet,
  FaBroom,
  FaBug,
  FaShieldAlt,
  FaUserCog,
  FaCheckCircle,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users } from "lucide-react";
import WhatsappButton from "./whatsappButton";
const ServicesSection = () => {
  const services = [
    {
      icon: <FaFaucet className="text-purple-600 text-4xl mb-4 sm:mb-3" />,
      title: "Water Filter Services",
      desc: "Advanced purification systems ensuring safe, clean, and healthy water for your family and business.",
    },
    {
      icon: <FaBroom className="text-purple-600 text-4xl mb-4 sm:mb-3" />,
      title: "Cleaning Services",
      desc: "Deep cleaning and sanitization services for homes and commercial spaces with modern tools.",
    },
    {
      icon: <FaBug className="text-purple-600 text-4xl mb-4 sm:mb-3" />,
      title: "Pest Control Services",
      desc: "Eco-friendly pest management solutions to protect your property from unwanted guests.",
    },
    {
      icon: <FaShieldAlt className="text-purple-600 text-4xl mb-4 sm:mb-3" />,
      title: "Waterproofing Services",
      desc: "Reliable waterproofing to protect your walls, terraces, and foundations from leaks and damage.",
    },
  ];

  const reasons = [
    {
      icon: <FaUserCog className="text-teal-500 text-3xl mb-3" />,
      title: "Experienced Professionals",
      desc: "Certified experts with hands-on experience and dedication to service excellence.",
    },
    {
      icon: <FaCheckCircle className="text-teal-500 text-3xl mb-3" />,
      title: "Quality Assurance",
      desc: "We use top-quality materials and the latest methods for long-lasting results.",
    },
    {
      icon: <FaClock className="text-teal-500 text-3xl mb-3" />,
      title: "Timely Service",
      desc: "We respect your time — fast response and on-schedule completion guaranteed.",
    },
    {
      icon: <FaStar className="text-teal-500 text-3xl mb-3" />,
      title: "Customer Satisfaction",
      desc: "Your happiness is our success — we stand behind every service with full satisfaction.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans w-full overflow-hidden" id="services">
      {/* --- Service Categories --- */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
        <div className="max-w-5xl text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Service Categories
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At <span className="text-purple-600 font-semibold">U.G. Services & Management</span>,
            we deliver expert, reliable, and affordable home and business solutions.
            Our professionals bring modern techniques, eco-friendly materials, and years of
            experience to ensure safe, clean, and worry-free living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md hover:shadow-xl p-8 border border-gray-200 hover:border-purple-500 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 group"
              initial={{ y: 50, opacity: 0 }}           // start below
              animate={{ y: 0, opacity: 1 }}            // move up
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // stagger
            >
              {service.icon}
              <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
              <div className="hidden group-hover:block mt-1.5">

               <WhatsappButton data={service.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

<section className="bg-black text-white py-20 px-6 text-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
          Service Area
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We proudly serve the entire region of{" "}
          <span className="text-cyan-400 font-semibold">Nagpur, Maharashtra</span>, 
          ensuring prompt and reliable service for all our local clients.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition transform hover:-translate-y-2 hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-[2rem] blur-2xl opacity-0 hover:opacity-100 transition"></div>
            <Zap className="w-12 h-12 text-purple-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our local presence in Nagpur ensures we can provide faster response 
              times for all your service needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition transform hover:-translate-y-2 hover:-rotate-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-[2rem] blur-2xl opacity-0 hover:opacity-100 transition"></div>
            <ShieldCheck className="w-12 h-12 text-purple-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Guaranteed Reliability</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We offer dependable, high-quality services backed by our 
              understanding of the local community’s requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition transform hover:-translate-y-2 hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-[2rem] blur-2xl opacity-0 hover:opacity-100 transition"></div>
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our team consists of local professionals who bring dedicated expertise 
              and a personal touch to every job.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative glowing shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    </section>      

      {/* --- Why Choose Section --- */}
      <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 border-t border-gray-200 text-center">
        <div className="max-w-5xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-purple-600">U.G. Services & Management?</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Choosing us means choosing peace of mind. From the moment you book to the final result,
            we focus on professionalism, punctuality, and customer-first service quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl mx-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 hover:bg-purple-50 rounded-2xl shadow-sm hover:shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
