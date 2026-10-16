import { Logo } from "./Logo.jsx"
import { Navlinks } from "../navigation/Navlinks.jsx"
import "./Header.css"


export const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <Navlinks/>        
    </header>
  )
}
