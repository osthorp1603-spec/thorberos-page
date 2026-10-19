import imagenCorreo from "../assets/icons/correo.png"
import imagenGithub from "../assets/icons/github.png"
import imagenLinkedin from "../assets/icons/linkedin.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <a
        className="footer-link"
        title="GitHub"
        href="https://github.com/osthorp1603-spec"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        >
        <img src={imagenGithub} alt="GitHub" />
        </a>    

        <a
        className="footer-link"
        href="https://www.linkedin.com/in/oscar-bernat-thorp-68aa7034/"
        title="Linkedin"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        >
        <img src={imagenLinkedin} alt="LinkedIn" />
        </a>
    </div>
    <p className="footer-copy">© {new Date().getFullYear()} Thorberos. Todos los derechos reservados.</p>
    </footer>
  )
}