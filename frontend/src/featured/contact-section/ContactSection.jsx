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
          <span className="contact-icon">💬</span>
          <div>
            <h3>WhatsApp</h3>
            <p>+57 3226579935</p>
          </div>
        </a>

        {/* Tarjeta Correo */}
        <a href="mailto:tu-correo@xxxxx.com" className="contact-card">
          <span className="contact-icon">✉️</span>
          <div>
            <h3>Correo</h3>
            <p>tu-correo@xxxxx.com</p>
          </div>
        </a>

        {/* Tarjeta Ubicación */}
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <div>
            <h3>Ubicación</h3>
            <p>Cali, Colombia</p>
          </div>
        </div>

        {/* Tarjeta Redes Profesionales */}
        <a href="https://github.com/osthorp1603-spec" target="_blank" rel="noreferrer" className="contact-card">
          <span className="contact-icon">💻</span>
          <div>
            <h3>GitHub</h3>
            <p>Ver mis repositorios</p>
          </div>
        </a>

      </div>

      {/* 
   
        
      <div className="contact-social">
        <a href="https://facebook.com/tu-pagina" target="_blank" rel="noreferrer" className="social-btn">Facebook</a>
        <a href="https://instagram.com/tu-cuenta" target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
      </div>
      
      */}

    </section>
  )
}