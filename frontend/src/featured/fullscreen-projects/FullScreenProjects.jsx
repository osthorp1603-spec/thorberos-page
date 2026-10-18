
import "./FullScreenProjects.css"

export const FullScreenProjects = ({proyectos}) => {
  return (
    <div className="software-container">
      {proyectos.map((proyecto,index) => (
        <section key={proyecto.link} id={`proyecto-${index}`}className="proyecto-seccion">
          <video src={proyecto.video} autoPlay loop muted playsInline className="video-fondo" />
          <div  className="contenido-encima" >
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.descripcion}</p>
            <p>{proyecto.lenguaje}</p>
            {index < proyectos.length -1 && (
              <a href={`#proyecto-${index + 1}`}className="flecha-abajo" >
                🢃
              </a>
            )}
          </div>   
        </section>
      ))}
    </div>
  )  
}