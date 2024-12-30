import React, { useState } from "react"; 
import { Link } from "react-router-dom"; // Import Link for routing

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 right-0 p-4 z-10 bg-black w-full ">
      <nav className="flex justify-between items-center text-white text-lg">
        <div className="text-lg lg:text-2xl  font-bold">PORTFOLIO</div>

        <div className="hidden md:flex space-x-6 mr-6">
          {/* Use Link for client-side routing */}
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About me
          </Link>
          <Link to="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link to="/experience" className="hover:text-gray-400">
            Experience
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "≡"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-full bg-gray-800 p-4 space-y-4 text-white md:hidden">
          {/* Use Link for client-side routing in the mobile menu */}
          <Link to="/" className="hover:text-gray-400"> onClick={toggleMenu}
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            About me
          </Link>
          <Link
            to="/skills"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="block hover:text-gray-400"
            onClick={toggleMenu}
          >
            Experience
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
