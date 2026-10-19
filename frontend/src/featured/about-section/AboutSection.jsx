import "./AboutSection.css"

export const AboutSection = () => {
  return (
    <section className="about-container">
      
      <div className="about-text">
        <h1 className="about-title">Nosotros</h1>
        <p className="about-subtitle">Creerás que lo imposible se puede crear.</p>
        
        <p className="about-paragraph">
          THORBEROS nace de la unión entre la ingeniería electrónica,
          la lógica y el interés por crear soluciones tecnológicas.
          A finales de 2024, comencé a adentrarme en el desarrollo de
          software, un camino que me ha permitido aprender,
          experimentar y convertir mis ideas en aplicaciones que
          responden a necesidades reales.
        </p>
        
        <p className="about-paragraph">
          Hoy, THORBEROS reúne mis proyectos de software y desarrollo
          de videojuegos. Detrás de cada proyecto hay una idea, un
          problema por resolver y el interés por encontrar la mejor
          forma de hacerlo realidad. Más que crear por crear, se
          trata de aprender en el proceso, probar nuevas
          posibilidades y construir cosas que funcionen.
        </p>
      </div>

      <div className="about-image">
        <div className="image-placeholder">Imagen aquí</div>
      </div>

    </section>
  )
}