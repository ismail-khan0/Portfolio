import React, { useState } from "react";

const Sidebar = ({ sections, setActiveSection, activeSection }) => {
  return (
    <div className="w-full sm:w-1/4 bg-gray-300 text-black p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Professional Background</h2>
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer text-lg font-medium ${
    activeSection === index ? "text-black-300 underline" : "hover:text-gray-400"
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

const SectionSlider = ({ experienceData, educationData, certificatesData }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Experience", "Education", "Certificates"];

  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
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
            <h2 className="text-2xl font-bold mb-4">Education</h2>
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
            <h2 className="text-2xl font-bold mb-4">Certificates</h2>
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
    <div className="flex flex-col sm:flex-row bg-gray-100 h-full">
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="w-full sm:w-3/4 p-6 overflow-y-auto bg-gray-200">
        {renderSection()}
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, period, items }) => {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <h2 className="text-gray-500 text-sm mb-4">
        {subtitle} | {period}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionSlider;