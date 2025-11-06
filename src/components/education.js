import React from "react";
import "./education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="titulo">FORMACIÓN</h2>
      <div className="education-container">

        <div className="education-item">
          <h3>Programa Empresarial ¡SUPÉRATE! Hilasal</h3>
          <p className="periodo">2023 - Presente</p>
          <p className="detalle">
            Programa de excelencia académica que otorga becas en inglés, informática y valores.
          </p>
        </div>

        <div className="education-item">
          <h3>Complejo Educativo Sor Clara Quiroz</h3>
          <p className="periodo">2024 - 2025</p>
          <p className="detalle">
           Graduado de Bachillerato General.
          </p>
        </div>

        <div className="education-item">
          <h3>Academia Sabatina ASAB Universidad Dr. José Matias Delgado</h3>
          <p className="periodo">2022 - 2025</p>
          <p className="detalle">
          Graduado de diplomado academia sabatina Asab opcion Comunicaciones.
          </p>
        </div>

        <div className="education-item">
          <h3>Centro Escolar Arturo Ambrogi</h3>
          <p className="periodo">2015 - 2023</p>
          <p className="detalle">
           Educación Básica.
          </p>
        </div>
      </div>
    </section>
    
  );
}

export default Education;
