import React from "react";
import "./aboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about-me">
      <div className="contenedor">
        <div className="about-content">
          {/* Imagen a la izquierda */}
          <div className="about-image">
            <img src="/img/avatar1.png" alt="Tomas Bonilla" />
          </div>

          {/* Texto a la derecha */}
          <div className="about-text">
            <h2 className="titulo">Sobre Mí</h2>
            <p className="descripcion">
              Graduado de bachillerato con conocimientos en programación básica, herramientas digitales e inglés básico.
              Formación en comunicaciones, con interés en el desarrollo de software y el marketing digital.
              Reconocido por ser responsable, resiliente, creativo, con habilidades sociales y liderazgo natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
