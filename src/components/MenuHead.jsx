import { Link } from "react-router-dom"

export function MenuHead(){
    return (
        <nav>
          <Link to="/sobre-mi">Sobre mi</Link> 
          <Link to="/skills">Skills</Link> 
          <Link to="/proyectos">Proyectos</Link> 
          <Link to="/contactos">Contactos</Link> 
        </nav>
    )
}