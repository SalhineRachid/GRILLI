import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../Pages/font.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center p-[1%] fixed bg-transparent z-20">
      <img src={logo} className="w-24 sm:w-28 md:w-32 lg:w-36" />

      {/* Desktop menu */}
      <li className="hidden lg:flex w-[30%] justify-between items-center font-dm_sans text-white text-[0.90rem] font-semibold">
        <a href="#home" className="border-b-2 border-transparent hover:border-[hsl(38,61%,73%)] hover:text-[hsl(38,61%,73%)] cursor-pointer pb-1 transition-all duration-300">HOME</a>
        <a href="#menu" className="border-b-2 border-transparent hover:border-[hsl(38,61%,73%)] hover:text-[hsl(38,61%,73%)] cursor-pointer pb-1 transition-all duration-300">MENUS</a>
        <a href="#about" className="border-b-2 border-transparent hover:border-[hsl(38,61%,73%)] hover:text-[hsl(38,61%,73%)] cursor-pointer pb-1 transition-all duration-300">ABOUT US</a>
        <a href="#special" className="border-b-2 border-transparent hover:border-[hsl(38,61%,73%)] hover:text-[hsl(38,61%,73%)] cursor-pointer pb-1 transition-all duration-300">OUR CHEFS</a>
        <a href="#contact" className="border-b-2 border-transparent hover:border-[hsl(38,61%,73%)] hover:text-[hsl(38,61%,73%)] cursor-pointer pb-1 transition-all duration-300">CONTACT</a>
      </li>

      <div className="flex items-center gap-4">
        <button className="w-40 sm:w-45 md:w-45 lg:w-[200px] h-12 sm:h-11 lg:h-[57px] border-2 bg-[hsl(38,61%,73%)] font-forum font-bold text-xs sm:text-xs lg:text-[12px] tracking-[3px] hover:border-[hsl(38,61%,73%)] hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300">
          FIND A TABLE
        </button>

        {/* Hamburger button for small and medium screens */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[hsl(38,61%,73%)] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-30`}>
        <button
          className="absolute top-4 right-4 text-black text-2xl hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-black pt-12">
          <a href="#home" className="id-apply-forum-font bg-transparent text-black px-6 py-2 rounded-lg hover:text-white hover:underline transition-all duration-300 cursor-pointer">HOME</a>
          <a href="#menu" className="id-apply-forum-font bg-transparent text-black px-6 py-2 rounded-lg hover:text-white hover:underline transition-all duration-300 cursor-pointer">MENUS</a>
          <a href="#about" className="id-apply-forum-font bg-transparent text-black px-6 py-2 rounded-lg hover:text-white hover:underline transition-all duration-300 cursor-pointer">ABOUT US</a>
          <a href="#special" className="id-apply-forum-font bg-transparent text-black px-6 py-2 rounded-lg hover:text-white hover:underline transition-all duration-300 cursor-pointer">OUR CHEFS</a>
          <a href="#contact" className="id-apply-forum-font bg-transparent text-black px-6 py-2 rounded-lg hover:text-white hover:underline transition-all duration-300 cursor-pointer">CONTACT</a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 backdrop-blur-sm lg:hidden z-20" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}

export default Navbar;
