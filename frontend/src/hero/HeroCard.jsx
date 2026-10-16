import { NavLink } from "react-router-dom"
import "./HeroCard.css"

export const HeroCard = ({icon,title,buttonText,link}) => {
  return (
    <div className="hero-card">      
      <img className="hero-card-icon" src={icon} alt={title}/>      
      <h3 className="hero-card-title">
        {title}
      </h3>
      <NavLink to={link} className="hero-card-button">
        {buttonText}
      </NavLink>
    </div>
  )
}
