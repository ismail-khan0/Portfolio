import React from "react";
import { useExperience } from "../Context/ExperienceContext";
import Sidebar from "./Sidebar";
import Card from "./Card";

const SectionSlider = () => {
  const { activeSection, experienceData, educationData, certificatesData } = useExperience();

  const renderSection = () => {
    let data, title;

    switch (activeSection) {
      case 0:
        title = "Experience";
        data = experienceData;
        break;
      case 1:
        title = "Education";
        data = educationData;
        break;
      case 2:
        title = "Certificates";
        data = certificatesData;
        break;
      default:
        return null;
    }

    return (
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 h-full">
      <Sidebar />
      <div className="w-full sm:w-3/4 p-6 overflow-y-auto bg-gray-200">
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionSlider;
