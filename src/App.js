import React from "react";
import Inicio from "./components/inicio";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Education from "./components/education";
import Certis from "./components/certis";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app-fondo">
      <Inicio />
      <AboutMe />
      <Education />
      <Projects />
      <Certis />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
