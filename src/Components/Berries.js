import react from "react";

function Berries() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ismail-Resume.pdf"; // Make sure the file is in the public folder
    link.download = "Ismail-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full p-4 sm:p-8 flex flex-col space-y-4 bg-slate-950">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">IT BERRIES</h1>
      <p className="text-gray-400 text-sm sm:text-base mt-2 whitespace-pre-line">
        During my journey, I faced challenges like debugging complex issues,
        staying updated with evolving technologies, and balancing performance
        with functionality. Over time, I developed efficient debugging skills using tools like Chrome DevTools, stayed current by taking online courses, and optimized my projects with techniques like lazy loading and effective state management. These experiences have strengthened my adaptability and problem-solving abilities.
      </p>
      <button
        onClick={handleDownload}
        className="p-2 w-32 flex items-center justify-center font-semibold text-sm sm:text-base text-gray-200 rounded-full border border-gray-200 hover:bg-gray-200 hover:text-black transition"
      >
        Download CV
      </button>
    </div>
  );
}

export default Berries;
