import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="logo" className="w-20 drop-shadow-lg" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a 
              href="#Header" 
              className="relative hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#About" 
              className="relative hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#Projects" 
              className="relative hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#Testimonials" 
              className="relative hover:text-blue-400 transition duration-300"
            >
              Testimonials
            </a>
          </li>
        </ul>

        {/* Sign up button (Desktop) */}
        <a
          href="/signin"
          className="hidden md:block bg-white text-black px-8 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white transition duration-300 shadow-lg"
        >
          Sign up
        </a>

        {/* Menu icon for mobile */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden w-7 cursor-pointer drop-shadow-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {menuOpen && (
        <div className="bg-black/90 backdrop-blur-md py-4 md:hidden text-center">
          <ul className="flex flex-col space-y-2 text-white">
            <a
              href="#Header"
              className="px-4 py-2 mx-4 rounded-full inline-block hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#About"
              className="px-4 py-2 mx-4 rounded-full inline-block hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#Projects"
              className="px-4 py-2 mx-4 rounded-full inline-block hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#Testimonials"
              className="px-4 py-2 mx-4 rounded-full inline-block hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/signin"
              className="px-8 py-2 mx-4 mt-2 bg-white text-black rounded-full font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white transition duration-300 inline-block"
            >
              Sign up
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;