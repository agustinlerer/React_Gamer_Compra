import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Menu from './componentes/Menu/Menu'
import Contenedor from './componentes/Contenedor/Contenedor'

import './App.css'




function App() {

  return (
    <>
      <Menu/>
      
      <Contenedor saludo= "hola soy una pagina"/>
    </>
  )
}

export default App
