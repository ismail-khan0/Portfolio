import { useState } from "react";

function Berries() {
  const [moreData, setMoreData] = useState(false);

  return (
    <div className="w-full p-4 sm:p-8 flex flex-col space-y-4 bg-slate-950">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">IT BERRIES</h1>
      <p className="text-gray-400 text-sm sm:text-base mt-2 whitespace-pre-line">
        During my journey, I faced challenges like debugging complex issues,
        staying updated with evolving technologies, and balancing performance
        with functionality.
        {moreData &&
          ` Over time, I developed efficient debugging skills using tools like Chrome DevTools, stayed current by taking online courses, and optimized my projects with techniques like lazy loading and effective state management. These experiences have strengthened my adaptability and problem-solving abilities.`}
      </p>
      <button
        onClick={() => setMoreData((prev) => !prev)}
        className="p-2 text-sm sm:text-base text-gray-200 flex border-l border-solid border-gray-200"
      >
        {moreData ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default Berries;
