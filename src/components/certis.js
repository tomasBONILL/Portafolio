import React from "react";
import "./certis.css";

function Certis() {
  const certificaciones = [
    {
      id: 1,
      titulo: "Certificación Microsoft Excel",
      descripcion:
        "Aprendí a utilizar las herramientas esenciales de excel.",
      imagen: "../img/excelCert.png",
    },
    {
      id: 2,
      titulo: "Certificación  Python",
      descripcion:
        "Profundicé en el aprendizaje de el lenguaje de programación Python.",
      imagen: "../img/pythonCert.png",
    },
  ];

  return (
    <section className="certis" id="certis">
      <h2 className="titulo-certis">Certificaciones</h2>
      <div className="lista-certis">
        {certificaciones.map((cert, index) => (
          <div
            key={cert.id}
            className={`cert-item ${index % 2 === 0 ? "izquierda" : "derecha"}`}
          >
            <div className="cert-texto">
              <h3>{cert.titulo}</h3>
              <p>{cert.descripcion}</p>
            </div>
            <div className="cert-imagen">
              <img src={cert.imagen} alt={cert.titulo} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certis;
