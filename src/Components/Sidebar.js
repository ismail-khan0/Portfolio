import React from "react";
import { useExperience } from "../Context/ExperienceContext";

const Sidebar = () => {
  const { sections, activeSection, setActiveSection } = useExperience();

  return (
    <div className="w-full sm:w-1/4 bg-gray-800 text-white p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Professional Background</h2>
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer text-lg font-medium ${
              activeSection === index ? "text-gray-300 underline" : "hover:text-gray-400"
            }`}
            onClick={() => setActiveSection(index)}
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
