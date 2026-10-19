import "./AboutSection.css"

export const AboutSection = () => {
  return (
    <section className="about-container">
      
      <div className="about-text">
        <h1 className="about-title">Nosotros</h1>
        <p className="about-subtitle">Creerás que lo imposible se puede crear.</p>
        
        <p className="about-paragraph">
          Soy ingeniero electrónico y mi camino en el desarrollo de software
          comenzó a finales de 2024, cuando decidí adentrarme en un mundo
          que apenas empezaba a conocer. Lo que comenzó como un reto de
          aprendizaje se convirtió en una pasión por construir soluciones
          tecnológicas y transformar ideas en proyectos reales.
        </p>
        
        <p className="about-paragraph">
          Hoy, THORBEROS reúne mi trabajo en desarrollo de software y mis
          primeros pasos en la creación de videojuegos. Cada proyecto es
          una oportunidad para aprender, experimentar y llevar una idea
          más allá de lo que parecía posible.
        </p>
      </div>

      <div className="about-image">
        <div className="image-placeholder">Imagen aquí</div>
      </div>

    </section>
  )
}