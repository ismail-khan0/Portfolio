import React, { useState } from "react";
import { a } from "react-router-dom"; // Make sure react-router-dom is installed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 right-0 p-4 z-10 w-full">
      <nav className="flex justify-between items-center text-white text-lg">
        <div className="text-lg lg:text-2xl text-black font-bold">PORTFOLIO</div>

        <div className="hidden md:flex space-x-6 mr-6">
          <a href="#Home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About me
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#Experience" className="hover:text-gray-400">
            Experience
          </a>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "≡"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-full bg-gray-800 p-4 space-y-4 text-white md:hidden">
          <a
            href="#about"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            About me
          </a>
          <a
            href="#skills"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#Experience"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            Experience
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
