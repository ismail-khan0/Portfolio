import React from "react";
import { ExperienceProvider } from "../Context/ExperienceContext";
import SectionSlider from "./SectionSlider";

const Experience = () => {
  return (
    <ExperienceProvider>
      <SectionSlider />
    </ExperienceProvider>
  );
};

export default Experience;
