import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // 👈 nuevo estado

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ogaym7",
        "123456", 
        form.current,
        "AJ9QdQCLpPwDRgdfs"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset(); // limpia el formulario
      })
      .catch((error) => {
        console.error("Error detallado:", error);
        setStatus("❌ Error sending message. Please try again.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="titulo">Contáctame</h2>
      <p className="descripcion">
       Si te gustaría colaborar conmigo o conocer más sobre mi trabajo, puedes escribirme un mensaje. 
        ¡Estaré feliz de responderte!
      </p>

      <form ref={form} onSubmit={sendEmail} className="formulario">
        <div className="campo">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="from_email">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="youremail@gmail.com"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">Send</button>

        {}
        {status && <p className="estado-mensaje">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
