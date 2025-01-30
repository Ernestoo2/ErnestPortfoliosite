import About from "Component/About";
import Contact from "Component/Contact";
import Experience from "Component/Experience";
import Hero from "Component/Hero";
import Navbar from "Component/Navbar";
import Projects from "Component/Projects";
import React from "react";
import Technology from "Component/Technology";

function App() {
  return (
    <div className="App overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
      <Experience/>
      <Projects/>
      <Contact/>
      {/* </> */}
      </div>
      
    </div>
  );
}

export default App;
