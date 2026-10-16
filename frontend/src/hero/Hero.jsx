import { HeroCard } from "./HeroCard"
import imagenControl from "../assets/icons/control.png"
import imagenCodigo from "../assets/icons/code.png"
import "./Hero.css"


    export const Hero = () => {
    return (
        <section className="hero" >
            <h2 className="hero-title">ESTUDIO DE SOFTWARE Y VIDEOJUEGOS</h2>
            <p className="hero-sub" >Creerás que lo imposible se puede crear.</p>
            <div className="hero-cards" >  
                <HeroCard link="/juegos" icon={imagenControl} title="Desarrollo de Videojuegos" buttonText="ACCEDER A JUEGOS"/>
                <HeroCard link="/software" icon={imagenCodigo} title="Desarrollo de Software" buttonText="ACCEDER A APPS"  />                
            </div>
        </section>
    )
    }
