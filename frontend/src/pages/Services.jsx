import { servicios } from "../data/services.js"
import { ServicesGrid } from "../featured/services-grid/ServicesGrid.jsx"

export const Services = () => {
  return (
    <ServicesGrid servicios={servicios} />
  )
}