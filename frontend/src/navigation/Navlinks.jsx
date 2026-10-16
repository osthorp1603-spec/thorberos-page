import { NavLink } from "react-router-dom"
import "./Navlinks.css"


export const Navlinks = () => {
  return (
    <nav className="nav-links">      
      <ul>
        <li>
          <NavLink className="nav-item" to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/servicios">Servicios</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/software">Software</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/juegos">Juegos</NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/nosotros">Nosotros</NavLink>
        </li>
          <li>
          <NavLink className="nav-item" to="/contacto">Contacto</NavLink>
        </li>
      </ul>        
    </nav>
  )
}
