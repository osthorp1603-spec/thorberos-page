import imagenGithub from "../../assets/icons/github.png"
import imagenCorreo from "../../assets/icons/correo.png"
import imagenWhats from "../../assets/icons/whatsapp.png"
import imagenUbicacion from "../../assets/icons/ubicacion.png"
import "./ContactSection.css"

export const ContactSection = () => {
  return (
    <section className="contact-container">
      
      <div className="contact-header">
        <h1 className="contact-title">Contacto</h1>
        <p className="contact-subtitle">Estamos atentos para ayudarte.</p>
      </div>

      <div className="contact-grid">
        
        {/* Tarjeta WhatsApp */}
        <a href="https://wa.me/573226579935" target="_blank" rel="noreferrer" className="contact-card">
          <span className="contact-icon">
            <img src={imagenWhats} alt="whatsapp" className="contact-img-icon" />
          </span>
          <div>
            <h3>WhatsApp</h3>
            <p>+57 3226579935</p>
          </div>
        </a>

        {/* Tarjeta Correo */}
        <a href="mailto:osthor1603o@gmail.com" className="contact-card">
          <span className="contact-icon">
            <img src={imagenCorreo} alt="e-mail" className="contact-img-icon" />
          </span>
          <div>
            <h3>Correo</h3>
            <p>osthor1603o@gmail.com</p>
          </div>
        </a>

        {/* Tarjeta Ubicación */}
        <div className="contact-card">
          <span className="contact-icon">
             <img src={imagenUbicacion} alt="ubicacion" className="contact-img-icon" />
          </span>
          <div>
            <h3>Ubicación</h3>
            <p>Cali, Colombia</p>
          </div>
        </div>

      </div>


      {/*    
        
      <div className="contact-social">
        <a href="https://facebook.com/tu-pagina" target="_blank" rel="noreferrer" className="social-btn">Facebook</a>
        
      </div>
      
      */}

    </section>
  )
}