import React from "react";

function Journey() {
  return (
    <div className="p-4 flex flex-col items-center justify-center space-y-12 bg-gray-300">
      <button className="py-2 mt-8 px-8 text-3xl font-semibold flex border-4 border-solid border-black">
        My Journey
      </button>
      <div>
      <p className="mb-4">
        My journey into web development began with a passion for creating
        intuitive digital experiences. Starting as a<br/> self-learner, I honed my
        skills by working on personal projects and internships, where I explored
        technologies<br/> like React, Tailwind CSS, and TypeScript. Each challenge,
        from debugging issues to mastering new tools,has<br/> shaped me into a
        problem-solver who is eager to learn and grow. This journey continues to
        fuel my excitement<br/> for building impactful and user-friendly
        applications.
      </p>
      </div>
      <div className="w-32 h-[2px] bg-black mt-4"></div>
    </div>
  );
}

export default Journey;
