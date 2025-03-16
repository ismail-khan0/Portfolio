import React from "react";
import { FaLinkedin, FaInstagramSquare,FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import ismail from '../Images/ik_img.PNG';

const HeroSection = () => {
  return (
    <div
      id="Home"
      className="flex flex-col sm:flex-row h-auto sm:h-screen items-center justify-between bg-gray-300 overflow-hidden"
    >
      {/* Left Section */}
      <div className=" mt-12 lg:mt-0 w-full sm:w-1/2 p-4 sm:p-8 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 animate-fade-in">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-black mt-4 animate-bounce">
            Ismail Khan
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-lg animate-slide-up">
            Front-end Developer
          </p>
          <div className="mt-4 sm:mt-6 flex space-x-4">
            <a
              href="mailto:ik8323253@gmail.com"
              className="p-2 text-xl sm:text-2xl bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <MdOutlineEmail />
            </a>
            <a
              href="https://github.com/ismail-khan0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xl sm:text-2xl bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/its_ismail_khann?igsh=YngweDZkZjVzaDM0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xl sm:text-2xl bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-khan-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xl sm:text-2xl bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full hidden  sm:w-1/2 h-auto sm:h-[130vh] bg-black lg:flex items-center justify-center sm:transform sm:rotate-12">
        <img
          src={ismail}
          alt="Ismail Khan"
          className="h-60 sm:h-[100vh] rounded-full object-cover sm:transform sm:-rotate-12"
        />
      </div>
    </div>
  );
};

export default HeroSection;
