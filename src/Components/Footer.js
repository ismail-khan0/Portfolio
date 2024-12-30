import React from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center flex-col bg-black">
     
      <button
        onClick={scrollToTop}
        className="mt-6 text-white text-2xl cursor-pointer"
      >
        ⇪⇪
      </button>
      <h1 className="font-semibold text-white text-xl font-montserrat">
        Back To Top
      </h1>

      {/* Social Media Icons */}
      <div className="my-8 flex space-x-4">
        {/* Email Icon */}
        <a
          href="mailto:your-email@example.com"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <MdOutlineEmail />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/" // Update this URL to the correct Facebook profile link
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <IoLogoFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/" // Update this URL to the correct Instagram profile link
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FaInstagramSquare />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/" // Update this URL to the correct LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
