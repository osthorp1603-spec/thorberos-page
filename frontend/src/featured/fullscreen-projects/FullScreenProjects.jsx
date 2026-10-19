import "./FullScreenProjects.css"

export const FullScreenProjects = ({proyectos,tema="azul"}) => {
  return (
    <div className={`software-container tema-${tema}`}>
      {proyectos.map((proyecto,index) => (
        <section key={proyecto.link} id={`proyecto-${index}`}className="proyecto-seccion">
          <video src={proyecto.video} autoPlay loop muted playsInline className="video-fondo" />
          <div  className="contenido-encima" >
            <h2>{proyecto.titulo}</h2>
            <p className="lenguaje-tag">{proyecto.lenguaje}</p>
            {index < proyectos.length -1 && (
              <a href={`#proyecto-${index + 1}`}className="flecha-abajo" >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </a>
            )}
          </div>   
        </section>
      ))}
    </div>
  )  
}