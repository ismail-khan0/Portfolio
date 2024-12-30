import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";

const Sidebar = ({ sections, setActiveSection }) => {
  return (
    <div className="w-full sm:w-1/4 lg:w-1/4 h-auto bg-[#1f2937]  text-white p-4 sm:block flex flex-col">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-gray-400"
            onClick={() => setActiveSection(index)}
          >
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SectionSlider = ({ experienceData, educationData, certificatesData }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Experience", "Education", "Certificates"];

  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
            {experienceData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                items={item.items}
              />
            ))}
          </div>
        );
      case 1:
        return (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            {educationData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                items={item.items}
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Certificates</h2>
            {certificatesData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                items={item.items}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto border-solidborder-2 border-solid border-black bg-gray-100">
      <Sidebar sections={sections} setActiveSection={setActiveSection} />

      <div className="w-full lg:w-3/4 p-6 overflow-y-auto bg-gray-300 h-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionSlider;
