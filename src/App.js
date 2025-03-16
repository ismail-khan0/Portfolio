import React from "react";
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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* The Home route will render all components */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Berries />
                <About />
                <Skils />
                <Journey />
                <Experience />
                <ProjectShowcase/>
                <Footer />
              </>
            }
          />
          {/* Other routes */}
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/skills" element={<><Skils /><Footer /></>} />
          <Route path="/experience" element={<><Journey /><Experience /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
