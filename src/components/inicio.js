import React, { useState, useEffect } from "react";
import "./inicio.css";

function Inicio() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight - 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const scrollToSection = (id) => {
  if (id.toLowerCase() === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <section className="inicio">
      <div className="overlay"></div>
      <div className="contenido">
        <div className="perfil">
          <img src="/img/tomas.png" alt="Foto de perfil" className="foto" />
        </div>
        <h1 className="nombre">TOMÁS BONILLA</h1>


        <div className={`botones ${isSticky ? "sticky" : ""}`}>
          <button onClick={() => scrollToSection("Inicio")}>INICIO</button>
          <button onClick={() => scrollToSection("about")}>ACERCA DE MI</button>
          <button onClick={() => scrollToSection("education")}>FORMACIÓN</button>
          <button onClick={() => scrollToSection("projects")}>PROYECTOS</button>
          <button onClick={() => scrollToSection("certis")}>CERTIFICACIONES</button>
          <button onClick={() => scrollToSection("contact")}>CONTÁCTAME</button>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
