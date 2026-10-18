import "./ProjectCard.css"

export const ProjectCard = ({ proyecto }) => {
  return (
    <div className="project-card">
        <img className="project-card-img" src={proyecto.imagen} alt={proyecto.titulo} />
        <h3 className="project-card-title" >{proyecto.titulo}</h3>
        <p className="project-card-desc" >{proyecto.descripcion}</p>
        <a className="project-card-link" href={proyecto.link}>VER DETALLES</a>
    </div>
  )
}