import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import "./pages/Proyectos.jsx"
import { Proyectos } from './pages/Proyectos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <> 
    <App />
    <Proyectos />
    <Proyectos />
  </>
)
