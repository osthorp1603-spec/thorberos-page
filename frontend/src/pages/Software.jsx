import {proyectos} from "../data/projects.js"
import { FullScreenProjects } from "../featured/fullscreen-projects/FullScreenProjects.jsx"


export const Software = () => {

  const proyectosSoftware = proyectos.filter(p => p.lenguaje !== "GDScript")


  return (
    <FullScreenProjects proyectos={proyectosSoftware}/>
  
  )  
}