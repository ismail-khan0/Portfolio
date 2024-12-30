import React from "react";
import { MdDesignServices } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { GrVmMaintenance } from "react-icons/gr";

function About() {
  return (
    <div
      id="about"
      className="p-4 flex flex-col items-center justify-center space-y-12 bg-gray-300"
    >
      <button className="py-2 mt-8 px-8 text-3xl font-semibold font-montserrat flex border-4 border-solid border-black">
        About Me
      </button>
      <p className="mt-2 whitespace-pre-line text-center text-sm md:text-base lg:text-lg">
        Hi, I’m Ismail Khan, a passionate Frontend Developer with a keen
        interest in crafting intuitive and user-friendly <br /> web experiences.
        I specialize in building responsive and dynamic applications using
        modern technologies <br /> like React, Tailwind CSS, TypeScript, and
        Bootstrap.
      </p>
      <button className="px-4 font-bold flex border-2 border-solid border-black border-t-0 border-b-0">
        Explore
      </button>
      <div className="w-32 h-[1px] bg-black"></div>

      {/* Icons and Sections */}
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-12 mt-8 space-y-12 sm:space-y-0 sm:mt-16">
        <div className="relative text-center sm:text-left">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <MdDesignServices className="text-9xl text-black" />
          </div>
          <h1 className="text-3xl font-bold relative z-10">DESIGN</h1>
          <p className="mt-2 text-sm sm:text-base">
            I can design the site based on your needs and suggestions. I can{" "}
            <br />
            also design the site from scratch and consult you during the job.
          </p>
        </div>

        {/* Development Section */}
        <div className="relative text-center sm:text-left">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <VscTools className="text-9xl text-black" />
          </div>
          <h1 className="text-3xl font-bold relative z-10">DEVELOPMENT</h1>
          <p className="mt-2 text-sm sm:text-base">
            I can develop the site based on your needs and suggestions. I can{" "}
            <br />
            also design and develop the site from scratch and consult you during
            the job.
          </p>
        </div>
      </div>

      {/* Maintenance Section */}
      <div className="relative text-center sm:text-left mt-8">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <GrVmMaintenance className="text-9xl text-black" />
        </div>
        <h1 className="text-3xl font-bold relative z-10">MAINTENANCE</h1>
        <p className="mt-2 text-sm sm:text-base">
          I can provide maintenance services for your website to ensure <br />
          it remains up-to-date and functional as per your needs.
        </p>
      </div>

      <div className="w-32 h-[2px] bg-black mt-8"></div>
    </div>
  );
}

export default About;
