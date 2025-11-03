import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./folder/Contact";
import Footer from "./folder/Footer";
import Introduction from "./folder/Introduction";
import MyWork from "./folder/MyWork";
import Nav from "./folder/Nav";
import Portfolio from "./folder/Portfolio";
import Process from "./folder/Process";
import ProjectIdea from "./folder/ProjectIdea";
import WhatIDo from "./folder/WhatIDo";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  // ✅ Apply and save theme whenever it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Toggle between themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />

      <section data-aos="fade-up" className="section intro-bg">
        <Introduction />
      </section>
    
      <section data-aos="fade-down" className="section work-bg">
        <MyWork />
      </section>

      <section data-aos="fade-right" className="section process-bg">
        <Process />
      </section>

      <section data-aos="fade-left" className="section portfolio-bg">
        <Portfolio />
      </section>

      <section data-aos="flip-up" className="section whatido-bg">
        <WhatIDo />
      </section>

      <section data-aos="flip-up" className="section projectidea-bg">
        <ProjectIdea />
      </section>

      

      <section data-aos="flip-down" className="section contact-bg">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
