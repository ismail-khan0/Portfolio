import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Berries from "./Components/Berries";
import About from "./Components/About";
import Skils from "./Components/Skils";
import Journey from "./Components/Journey";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          
        </Routes>
        <HeroSection />
        <Berries/>
        <About />
        <Skils />
        <Berries />
        <Journey />
        <Experience />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
