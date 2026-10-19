import {proyectos} from "../data/projects.js"
import { FullScreenProjects } from "../featured/fullscreen-projects/FullScreenProjects.jsx"


export const Games = () => {

  const proyectosGames = proyectos.filter(p => p.lenguaje == "GDScript")


  return (
    <FullScreenProjects proyectos={proyectosGames}tema="rojo"/>
  
  )  
}