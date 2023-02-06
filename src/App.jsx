import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './componentes/Navbar/Navbar'
import Contenedor from './componentes/Contenedor/Contenedor'

import './App.css'




function App() {

  return (
    <>
      <Navbar/>
      
      <Contenedor saludo= "hola soy una pagina"/>
    </>
  )
}

export default App
