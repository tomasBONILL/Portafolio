import React, { useEffect } from "react";

function Projects() {
  const proyectos = [
    {
      titulo: "Medical Care",
      descripcion:
        "Este fue mi primer proyecto donde aprendí sobre diseño web y a utilizar Figma. Primera experiencia trabajando en equipo. El comienzo de todo.",
      imagen: "/img/imagen.png",
      link: "https://www.figma.com/proto/DNnJ6eEIG8SZFBvPnVmdYV/Medical-Care--copia-?node-id=206-2&p=f&t=SrUPeq3A0tGFUmmj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=347%3A28",
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

      <h2 style={{ fontSize: "4rem", marginTop: "6rem", marginBottom: "3rem" }}>
        Videos
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Video 1 - Usar iframe sin controls */}
        <div style={cardStyle}>
          <iframe
            src="https://drive.google.com/file/d/12FNexnbMdSXyGxn7uge5JRao8wc4bwAE/preview"
            title="Video Asabatillos Films"
            style={{ width: "100%", height: "240px", borderRadius: "10px", border: "none" }}
            allow="autoplay"
          />
          <h3 style={{ marginTop: "1rem", color: "#ffffff" }}>
            Asabatillos Films Violencia en el hogar 🎥
          </h3>
          <p style={paragraphStyle}>
          Este video fue producto de una investigación previa, acerca de la violencia en el hogar de 
          los estudiantes salvadoreños, con el objetivo de concientizar a los padres de 
          familia sobre el ciclo de la violencia e incentivar acciones que contribuyan a romperlo.
          </p>
        </div>

        {/* Video 2 - Casa Clementina */}
<div style={cardStyle}>
  <iframe
    src="https://drive.google.com/file/d/1kRQwMit3cdMkFQi5RtTWloMJ06AEhTK-/preview"
    title="Video Casa Clementina"
    style={{ width: "100%", height: "240px", borderRadius: "10px", border: "none" }}
    allow="autoplay"
  />
  <h3 style={{ marginTop: "1rem", color: "#f9f9f9" }}>Casa Clementina 🎬</h3>
  <p style={paragraphStyle}>
    Un cortometraje que combina narrativa textual,música y estética visual sobre una visita a un lugar magico.
    Una experiencia que me ayudó a realizar el video de manera creativa.
  </p>
</div>

{/* Video 3 - El Corto */}
<div style={cardStyle}>
  <iframe
    src="https://drive.google.com/file/d/1RX_dW7fz_9kfX_9hJu3XKdkadqUgrgHQ/preview"
    title="Video El intercambio"
    style={{ width: "100%", height: "240px", borderRadius: "10px", border: "none" }}
    allow="autoplay"
  />
  <h3 style={{ marginTop: "1rem", color: "#ecf8ff" }}>El intercambio 🎞️</h3>
  <p style={paragraphStyle}>
    Una producción creativa, realizada en las calles de la ciudad, con un toque humoristico y una reflexión divertida. 
    Este corto fue mi primer paso a la edición y producción de videos.
  </p>
</div>

      </div>

      <h2 style={{ fontSize: "4rem", marginTop: "6rem", marginBottom: "3rem" }}>
        Mi investigación
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={researchContainerStyle}>
          <div style={{ flex: "1 1 45%", textAlign: "left", color: "white" }}>
            <h3 style={{ marginBottom: "1rem", color: "#ffffff" }}>
              Mi investigación 🎓
            </h3>
            <p style={paragraphStyle}>
              Este trabajo, lo realizé en grupo con compañeros de la academia sabatina ASAB de la universidad Dr. José Matias Delgado, como parte de una investigación realizada durante 3 años dentro del programa. Abordamos el tema principal de la violencia en el hogar de estudiantes de sexto grado, tomando como muestra niños de el centro escolar Arturo Ambrogi. Este documento contiene nuestros hallasgos y resultados. Fue un trabajo arduo y largo pero sin duda nuevo y retador donde aprendí mucho de la investigación y comunicación.
            </p>
            <a
              href="/doc/G3proyecto.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                color: "#00a2ff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ver PDF completo
            </a>
          </div>

          <div style={{ flex: "1 1 45%", display: "flex", justifyContent: "center" }}>
            <iframe
              src="/doc/G3proyecto.pdf"
              title="Mi investigación"
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "10px",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Estilos reutilizables
const cardStyle = {
  backgroundColor: "#2a0e0e",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  width: "320px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "auto",
};

const paragraphStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.4",
  color: "#adabab",
};

const researchContainerStyle = {
  backgroundColor: "#2a0e0e",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
  maxWidth: "900px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

export default Projects;
