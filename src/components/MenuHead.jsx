import { Link, NavLink } from "react-router-dom"
import "../style/MenuHead.css"

export function MenuHead(){
    return (
        <nav className="menuHead-nav">
          <NavLink className={({isActive}) => isActive? "menuHaead-navLink-00":null} to="/sobre-mi">Sobre mi</NavLink> 
          <NavLink className={({isActive}) => isActive? "menuHaead-navLink-01":null} to="/skills">Skills</NavLink> 
          <NavLink className={({isActive}) => isActive? "menuHaead-navLink-02":null} to="/proyectos">Proyectos</NavLink> 
          <NavLink className={({isActive}) => isActive? "menuHaead-navLink-03":null} to="/contactos">Contactos</NavLink> 
        </nav>
    )
}