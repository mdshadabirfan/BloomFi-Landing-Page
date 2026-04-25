import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Logos from "./components/Logos";
import Cases from "./components/Cases";

const App = () => {
  return (
    <div className="px-6">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Logos />
      <Cases/>
    </div>
  );
};

export default App;
