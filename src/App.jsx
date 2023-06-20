import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { MenuHead } from "./components/MenuHead"
import { Home } from "./pages/Home"
import { SobreMi } from "./pages/SobreMi"
import { Skills } from "./pages/Skills"
import { Proyectos } from "./pages/Proyectos"
import { Contacto } from "./pages/Contacto"

export function App() {
  return(

      <BrowserRouter>
        <MenuHead />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre-mi" element={<SobreMi />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/proyectos" element={<Proyectos />}/>
            <Route path="/contactos" element={<Contacto />}/>
          </Routes>
        </main>
      </BrowserRouter>
  )  
}

