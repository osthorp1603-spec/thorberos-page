import "./ServiceCard.css"

export const ServiceCard = ({ servicio }) => {
  return (
    <div className="service-card">
      
      
      <h3 className="service-hook">
        {servicio.gancho}
      </h3>
      
      <h4 className="service-title">
        {servicio.titulo}
      </h4>
      
      <p className="service-desc">
        {servicio.descripcion}
      </p>
      
      <span className="service-context">
        {servicio.contexto}
      </span>
    </div>
  )
}