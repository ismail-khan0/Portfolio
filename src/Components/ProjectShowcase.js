import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import behance from "../Images/IkBehance.png";
import mailocollcion from "../Images/MailoCollection.png";
import portfolio from "../Images/Porfolio.png";
import Realestat from "../Images/Realestat.png";
import shopyfy from "../Images/shopyfy.png";
import todolist from "../Images/todoApp.png";

const projects = [
  {
    name: "Behance Website",
    image: behance,
    description:
      "A large-scale, modern, and responsive Behance-style portfolio...",
    github: "https://github.com/ismail-khan0/IK-Behance",
    demo: "https://ik-behance.vercel.app/",
  },
  {
    name: "MailoCollection Website",
    image: mailocollcion,
    description:
      "MailoCollection is a large-scale website built with JavaSript, HTML5, CSS3...",
    github: "https://github.com/ismail-khan0/Shopping-Webisite",
    demo: "https://shopping-webisite.vercel.app/",
  },
  {
    name: "Realestate",
    image: Realestat,
    description: "A modern and responsive real estate website...",
    github: "https://github.com/yourusername/realestate",
    demo: "https://realestate-demo.com",
  },
  {
    name: "Portfolio",
    image: portfolio,
    description: "A modern and responsive portfolio built with React.js...",
    github: "https://github.com/ismail-khan0/protfolio",
    demo: "https://protfolio-gamma-seven.vercel.app/",
  },
  {
    name: "Shopping Website",
    image: shopyfy,
    description: "A modern shopping website with product listings...",
    github: "https://github.com/ismail-khan0/Mailo-shoes",
    demo: "https://mailo-shoes.vercel.app/",
  },
  {
    name: "TodoList",
    image: todolist,
    description: "A simple To-Do List app built with React.js...",
    github: "https://github.com/ismail-khan0/Todo_list",
    demo: "https://todo-list-ten-eosin.vercel.app/",
  },
];

const ProjectShowcase = () => {
  return (
    <div className="bg-gray-300 py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#112240] p-6 rounded-xl shadow-lg overflow-hidden group transition-transform duration-500 transform-style-preserve-3d"
            style={{ perspective: "1000px" }}
          >
            {/* Front Side */}
            <div className="front transition-transform duration-500 transform rotate-y-0 group-hover:rotate-y-180 backface-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">
                {project.name}
              </h3>
            </div>

            {/* Back Side (Hover Content) */}
            <div className="back absolute inset-0 bg-[#0D1B2A]/90 flex flex-col items-center justify-center p-4 text-white rounded-xl transition-transform duration-500 transform rotate-y-180 group-hover:rotate-y-0 backface-hidden">
              <h3 className="text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white flex items-center space-x-2"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white flex items-center space-x-2"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
