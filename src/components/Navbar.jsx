import React, { useState } from "react";
import Logo from "../assets/placehub_logo.png";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Training", href: "/training" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-[#FEFEFA] border-b border-gray-100 sticky top-0 z-50 font-['Outfit'] shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-[#3E1D67] px-1 py-2 text-[17px] font-bold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-[#3E1D67] hover:bg-[#2a1345] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-sm transition-transform hover:scale-105">
              <a href="/apply">Apply</a>
            </Button>
            <Button
              variant="outline"
              className="border-[1.5px] border-[#3E1D67] text-[#3E1D67] hover:bg-purple-50 rounded-xl px-6 py-6 text-base font-bold transition-transform hover:scale-105"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3E1D67] hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-4 bg-[#FEFEFA]">
          <div className="flex items-center justify-between p-4 bg-[#FEFEFA]">
            <div className="flex items-center ">
              <img src={Logo} alt="Logo" className="w-24" />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-[#3E1D67]"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4 bg-[#FEFEFA]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-[#3E1D67] px-1 py-2 text-[17px] font-bold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4 p-4 bg-[#FEFEFA]">
            <Button className="bg-[#3E1D67] hover:bg-[#2a1345] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-sm transition-transform hover:scale-105">
              <a href="/apply">Apply</a>
            </Button>
            <Button
              variant="outline"
              className="border-[1.5px] border-[#3E1D67] text-[#3E1D67] hover:bg-purple-50 rounded-xl px-6 py-6 text-base font-bold transition-transform hover:scale-105"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
