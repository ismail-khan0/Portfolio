import React, { createContext, useContext, useState } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Experience", "Education", "Certificates"];

  const experienceData = [
    {
      title: "Front-end Developer",
      subtitle: "Snipbyte | Hybrid (Remote & On-site)",
      period: "January 2025 – Present",
      items: [
      "Developed responsive web apps using Next.js, React, TypeScript, and JavaScript.",
      "Managed state with Redux and Context API for efficient data flow.",
      "Styled apps using Tailwind CSS and SaaS for modern designs.",
      "Collaborated in Agile teams to deliver features on time.",
      "Integrated RESTful APIs and GraphQL for seamless data handling.",
      "Used GitHub for version control and team collaboration.",
      "Wrote clean, reusable, and well-documented code for scalability.",
      ],
      },
      
      {
      title: "Intern Front-end Developer",
      subtitle: "Capregsoft | Wah Cantt, Pakistan",
      period: "March 2024 – June 2024",
      items: [
      "Built responsive web apps using React, Tailwind CSS, TypeScript, and JavaScript.",
      "Refactored code and upgraded packages for better maintainability.",
      "Worked in Agile Scrum, participating in sprints and retrospectives.",
      "Documented code for scalability and future development.",
      "Used Docker for containerization and GitHub for version control.",
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
