import React, { useEffect } from "react";

function Projects() {
  const proyectos = [
    {
      titulo: "Medical Care",
      descripcion:
        "Este fue mi primer proyecto donde aprendí sobre diseño web y a utilizar Figma. Primera experiencia trabajando en equipo. El comienzo de todo.",
      imagen: "/img/imagen.png",
      link: "https://www.figma.com/design/xkHQzxUEHrhMm88KTSvsBi/Untitled?node-id=0-1&t=6CnTGw0PWpQ3HtG4-1",
    },
    {
      titulo: "Seven",
      descripcion:
        "Un proyecto donde me aventuré en el uso de base de datos y creación del sitio web. Fue mi primera vez trabajando en equipo un código.",
      imagen: "/img/SEVEN.png",
      link: "https://github.com/tomasBONILL/SevenProyect",
    },
    {
      titulo: "IonSpark",
      descripcion:
        "Mi último proyecto, donde combinamos creatividad y código. Fue fruto de trabajo en equipo y colaboración.",
      imagen: "/img/ionspark.png",
      link: "https://github.com/MrAlegria-6/IonSparkProject",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      style={{ textAlign: "center", padding: "3rem 0", color: "white" }}
    >
      <h2 style={{ fontSize: "6rem", marginBottom: "6rem" }}>Mis Proyectos</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {proyectos.map((p, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              width: "300px",
              backgroundColor: "#2a0e0e",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={p.imagen}
              alt={p.titulo}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ marginTop: "1rem" }}>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00a2ff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Visitar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
