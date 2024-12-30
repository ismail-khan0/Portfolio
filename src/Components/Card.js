import React from "react";

function Card({ title, subtitle, period, items }) {
  return (
    <div  className="mb-6 ">
      <h1 className="text-xl font-bold ">{title}</h1>
      <h2 className="text-sm text-gray-500 mt-1">{subtitle} | {period}</h2>
      <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
