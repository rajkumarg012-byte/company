import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import WhatsappButton from "../Components/whatsappButton";
import logo from '../assets/ezgif-447aede9ddd9e1.png';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const menu = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.clientHeight : 80; // fallback if not found
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY -50 ;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setMenuOpen(false);
  }
};



  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
       {/* <div className="logo flex  items-center "> */}
  {/* Logo Image */}


  {/* Optional text next to or below logo */}
  {/* <div className="text-left leading-2">
    <span className="uppercase text-[18px] font-bold text-purple-800 ">
      Services
    </span>
    <br />
    <span className="text-sm text-gray-700 font-medium">
      & Management
    </span>
  </div> */}
{/* </div> */}
<div className="logo flex items-center h-14 sm:h-16">
<img
  src={logo}
  alt="UG Services & Management"
  className="h-15 w-full object-cover"
  style={{ margin: 0, padding: 0, display: "block" }}
/>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menu.map((item, idx) => (
            <li key={idx}
            
             onClick={() => scrollToSection(item.id)}>
              <span
                to={item.path}
                className="text-gray-700 font-medium hover:text-purple-700 transition-colors duration-300"
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button (hidden on small screens) */}
        <div className="hidden md:block">
          <WhatsappButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 hover:text-purple-700 transition-colors"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col text-center py-4 space-y-3">
            {menu.map((item, idx) => (
       <li key={idx}>
  <Link
    to={item.path}
    onClick={() => {
      scrollToSection(item.id);
      setMenuOpen(false);
    }}
    className="block text-gray-800 font-medium hover:text-purple-700 transition-colors duration-300"
  >
    {item.name}
  </Link>
</li>

            ))}
            <li className="mt-3">
              <WhatsappButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
