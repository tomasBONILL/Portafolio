import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Tomás Bonilla. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="https://github.com/tomasBONILL" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/tomxsbo_/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
         <a href="https://www.instagram.com/tomxsbo_/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
