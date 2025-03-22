import React from "react";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNodedotjs, SiMysql, SiMongodb, SiTypescript, SiRedux ,SiNextdotjs, SiExpress} from "react-icons/si";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { FaCogs } from "react-icons/fa"; // For C++
import { FaRegHandshake } from "react-icons/fa"; // For Bidding

function Skils() {
  const skillsData = [
    [
      { icon: <FaReact size={64} className="text-blue-400" />, title: "React" },
      { icon: <SiTypescript size={64} className="text-blue-400" />, title: "TypeScript" },
      { icon: <SiNextdotjs size={64} className="text-blue-400" />, title: "Next JS" },
      { icon: <SiRedux size={64} className="text-blue-500" />, title: "Redux" },
    
    ],
    [
      { icon: <SiJavascript size={64} className="text-yellow-400" />, title: "JavaScript" },
      { icon: <FaHtml5 size={64} className="text-orange-500" />, title: "HTML5" },
      { icon: <FaCss3Alt size={64} className="text-blue-500" />, title: "CSS" },
      { icon: <PiWebhooksLogoBold size={64} className="text-purple-500" />, title: "Hooks" },

    ],
    [
      { icon: <FaSass size={64} className="text-pink-500" />, title: "Sass" },
      { icon: <FaBootstrap size={64} className="text-purple-500" />, title: "Bootstrap" },
      { icon: <FaGitAlt size={64} className="text-orange-600" />, title: "Git" },
      { icon: <SiTailwindcss size={64} className="text-teal-400" />, title: "Tailwind" },
    ],
  ];

  const learningData = [
    { icon: <SiNodedotjs size={64} className="text-green-600" />, title: "Node.js" },
    { icon: <SiMysql size={64} className="text-blue-600" />, title: "MySQL" },
    { icon: <SiMongodb size={64} className="text-green-500" />, title: "MongoDB" },
    { icon: <SiExpress size={64} className="text-blue-400" />, title: "Express.js" },
  ];

  const otherskillsData = [

    { icon: <FaCogs size={64} className="text-gray-500" />, title: "C++" },
    { icon: <FaRegHandshake size={64} className="text-blue-600" />, title: "Bidding" },
    { icon: <FaCogs size={64} className="text-gray-500" />, title: "C" },
    { icon: <FaReact size={64} className="text-blue-400" />, title: "Agile Scrum" },
  ];

  return (
    <div id="skills" className="p-4 flex flex-col space-y-12 bg-gray-300 ">
      <div className="flex justify-center items-center">
        <button className="py-2 mt-8 px-8 text-3xl font-semibold flex border-4 border-solid border-black">
          SKILLS
        </button>
      </div>

      {/* USING NOW Section */}
    <div>
  <h1 className="text-2xl flex justify-center items-center lg:flex lg:justify-normal lg:items-baseline font-semibold mb-6 relative z-10 ml-0 sm:ml-20 lg:ml-72">
    USING NOW:
  </h1>
  <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center">
    {skillsData.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="flex flex-col sm:flex-row sm:space-x-8 mt-4 space-y-4 sm:space-y-0"
      >
        {row.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="flex flex-col items-center w-full sm:w-40 text-center"
          >
            {skill.icon}
            <h1 className="mt-2 text-lg font-semibold">{skill.title}</h1>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

{/* LEARNING NOW Section */}
<div>
  <h1 className="text-2xl font-semibold mb-6 relative z-10 lg:ml-72 ml-24">
    LEARNING NOW:
  </h1>
  <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-center lg:space-x-32">
    {learningData.map((skill, skillIndex) => (
      <div
        key={skillIndex}
        className="flex flex-col items-center mt-8 w-full sm:w-auto text-center"
      >
        {skill.icon}
        <h1 className="mt-2 text-lg font-semibold">{skill.title}</h1>
      </div>
    ))}
  </div>
</div>

{/* OTHER SKILLS Section */}
<div>
  <h1 className="text-2xl font-semibold mb-6 relative z-10 ml-24 lg:ml-72">
    OTHER SKILLS:
  </h1>
  <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-center lg:space-x-32">
    {otherskillsData.map((skill, skillIndex) => (
      <div
        key={skillIndex}
        className="flex flex-col items-center mt-8 w-full sm:w-auto text-center"
      >
        {skill.icon}
        <h1 className="mt-2 text-lg font-semibold">{skill.title}</h1>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Skils;
