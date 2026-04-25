import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Logos from "./components/Logos";

const App = () => {
  return (
    <div className="px-6">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Logos />
    </div>
  );
};

export default App;
