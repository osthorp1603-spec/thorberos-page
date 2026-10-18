import { proyectos } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"
import "./FeaturedProjects.css"

export const FeaturedProjects = () => {
  return (
    <section className="featured">
      <h2 className="featured-title">PROYECTOS EN PRODUCCIÓN</h2>
      <p className="featured-trust">Software en uso en tiendas y centros educativos. Videojuegos en desarrollo.</p>
      <div className="featured-grid">
        {proyectos.slice(0, 3).map((proyecto) => (
          <ProjectCard key={proyecto.link} proyecto={proyecto}/>
        ))}        
      </div>

    </section>
  )
}
