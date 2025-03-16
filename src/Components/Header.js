import React, { useState } from "react";

const Header = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 right-0 p-4 z-10 bg-black w-full ">
      <nav className="flex justify-between items-center text-white text-lg">
        <div className="text-lg lg:text-2xl font-bold">PORTFOLIO</div>

        <div className="hidden md:flex space-x-6 mr-6">
          <button onClick={() => scrollToSection(refs.heroRef)} className="hover:text-gray-400">
            Home
          </button>
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-gray-400">
            About me
          </button>
          <button onClick={() => scrollToSection(refs.skillsRef)} className="hover:text-gray-400">
            Skills
          </button>
          <button onClick={() => scrollToSection(refs.experienceRef)} className="hover:text-gray-400">
            Experience
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "≡"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-full bg-gray-800 p-4 space-y-4 text-white md:hidden">
          <button onClick={() => { scrollToSection(refs.heroRef); toggleMenu(); }} className="block hover:text-gray-400">
            Home
          </button>
          <button onClick={() => { scrollToSection(refs.aboutRef); toggleMenu(); }} className="block hover:text-gray-400">
            About me
          </button>
          <button onClick={() => { scrollToSection(refs.skillsRef); toggleMenu(); }} className="block hover:text-gray-400">
            Skills
          </button>
          <button onClick={() => { scrollToSection(refs.experienceRef); toggleMenu(); }} className="block hover:text-gray-400">
            Experience
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
