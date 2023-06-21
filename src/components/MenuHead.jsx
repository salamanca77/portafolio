import { Link, NavLink } from "react-router-dom"
import { FaFacebook } from 'react-icons/fa'; /* iconos --- https://react-icons.github.io/react-icons/ */

export function MenuHead() {
  return (
    <header className="flex items-center w-full p-4 h-[10vh] bg-red-200">
      <nav className="flex-1 flex justify-center gap-10" >
        <a href="" className="">
          Sobre mi
        </a>
        <a href="" className="">
          Skill
        </a>
        <a href="" className="">
          Proyectos
        </a>
        <a href="" className="">
          Contactos
        </a>
      </nav>
    </header>

  )
}