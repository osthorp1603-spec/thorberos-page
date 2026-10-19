import { ServiceCard } from "./ServiceCard"
import "./ServicesGrid.css"

export const ServicesGrid = ({ servicios }) => {
  return (
    <div className="services-grid">
      {servicios.map((servicio) => (
        <ServiceCard key={servicio.id} servicio={servicio} />
      ))}
    </div>
  )
}