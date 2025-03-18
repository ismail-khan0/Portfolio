import React from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

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

      <div className="my-8 flex space-x-4">
        {/* Email Icon */}
        <a
          href="mailto:ik8323253@gmail.com"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <MdOutlineEmail />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/o6HKYV8QCRzQmfUK/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <IoLogoFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/its_ismail_khann?igsh=YngweDZkZjVzaDM0&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FaInstagramSquare />
        </a>

        <a
          href="https://www.linkedin.com/in/ismail-khan-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
