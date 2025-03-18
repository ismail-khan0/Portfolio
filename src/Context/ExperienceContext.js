import React, { createContext, useContext, useState } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Experience", "Education", "Certificates"];

  const experienceData = [
    {
      title: "Intern Front-end Developer",
      subtitle: "Capregsoft | Wah Cantt, Pakistan",
      period: "March 2024 – June 2024",
      items: [
        "Designed and developed responsive web applications using React, Tailwind CSS, TypeScript, and Bootstrap.",
        "Improved codebase efficiency by refactoring and upgrading packages for better maintainability.",
        "Collaborated with team members in an Agile Scrum environment, actively participating in sprints and retrospectives.",
        "Documented code for scalability and streamlined future development.",
        "Utilized Docker for containerization, optimizing development and deployment workflows.",
      ],
    },
  ];

  const educationData = [
    {
      title: "Bachelor of Science in Computer Science",
      subtitle: "University of Wah",
      period: "2018 – 2022",
      items: [
        "Specialized in web development, data structures, and algorithms.",
        "Actively participated in programming contests and hackathons.",
      ],
    },
  ];

  const certificatesData = [
    {
      title: "Certified React Developer",
      subtitle: "Udemy",
      period: "2023",
      items: [
        "Completed an extensive course on React.js, including hooks, state management, and performance optimization.",
        "Built 10+ real-world projects during the course.",
      ],
    },
    {
      title: "PMP Certification",
      subtitle: "Project Management Institute",
      period: "2022",
      items: [
        "Earned the globally recognized PMP certification for project management expertise.",
      ],
    },
  ];

  return (
    <ExperienceContext.Provider
      value={{
        activeSection,
        setActiveSection,
        sections,
        experienceData,
        educationData,
        certificatesData,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

// Export the custom hook
export const useExperience = () => useContext(ExperienceContext);
