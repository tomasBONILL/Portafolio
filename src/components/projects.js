import React, { useEffect } from "react";
import "./projects.css"; // 👈 nuevo archivo de estilos

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
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Mis Proyectos</h2>

      <div className="projects-grid">
        {proyectos.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.imagen} alt={p.titulo} className="project-img" />
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              Visitar
            </a>
          </div>
        ))}
      </div>

      <h2 className="projects-subtitle">Videos</h2>
      <div className="videos-grid">
        <div className="video-card">
          <iframe
            src="https://drive.google.com/file/d/12FNexnbMdSXyGxn7uge5JRao8wc4bwAE/preview"
            title="Video Asabatillos Films"
            allow="autoplay"
          />
          <h3>Asabatillos Films Violencia en el hogar 🎥</h3>
          <p>
            Este video fue producto de una investigación previa, acerca de la
            violencia en el hogar de los estudiantes salvadoreños...
          </p>
        </div>

        <div className="video-card">
          <iframe
            src="https://drive.google.com/file/d/1kRQwMit3cdMkFQi5RtTWloMJ06AEhTK-/preview"
            title="Video Casa Clementina"
            allow="autoplay"
          />
          <h3>Casa Clementina 🎬</h3>
          <p>
            Un cortometraje que combina narrativa textual, música y estética
            visual sobre una visita a un lugar mágico...
          </p>
        </div>

        <div className="video-card">
          <iframe
            src="https://drive.google.com/file/d/1RX_dW7fz_9kfX_9hJu3XKdkadqUgrgHQ/preview"
            title="Video El intercambio"
            allow="autoplay"
          />
          <h3>El intercambio 🎞️</h3>
          <p>
            Una producción creativa, realizada en las calles de la ciudad, con
            un toque humorístico...
          </p>
        </div>
      </div>

      <h2 className="projects-subtitle">Mi investigación</h2>
      <div className="research-container">
        <div className="research-text">
          <h3>Mi investigación 🎓</h3>
          <p>
            Este trabajo lo realicé en grupo con compañeros de la academia
            sabatina ASAB...
          </p>
          <a href="/doc/G3proyecto.pdf" target="_blank" rel="noopener noreferrer">
            Ver PDF completo
          </a>
        </div>
        <div className="research-doc">
          <iframe src="/doc/G3proyecto.pdf" title="Mi investigación"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Projects;
