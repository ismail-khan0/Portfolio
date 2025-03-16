import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Berries from "./Components/Berries";
import About from "./Components/About";
import Skils from "./Components/Skils";
import Journey from "./Components/Journey";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import ProjectShowcase from "./Components/ProjectShowcase";
import Whatsapp from "./Components/Whatsapp";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const berriesRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const journeyRef = useRef(null);
  const experienceRef = useRef(null);
  const projectShowcaseRef = useRef(null);
  const footerRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div>
        <Header scrollToSection={scrollToSection} refs={{ heroRef, aboutRef, skillsRef, experienceRef }} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={heroRef}><HeroSection /></div>
                <div ref={berriesRef}><Berries /></div>
                <div ref={aboutRef}><About /></div>
                <div ref={skillsRef}><Skils /></div>
                <div ref={journeyRef}><Journey /></div>
                <div ref={experienceRef}><Experience /></div>
                <div ref={projectShowcaseRef}><ProjectShowcase /></div>
                <div ref={footerRef}><Footer /></div>
              </>
            }
          />
        </Routes>
        <Whatsapp/>
      </div>
    </Router>
  );
}

export default App;
