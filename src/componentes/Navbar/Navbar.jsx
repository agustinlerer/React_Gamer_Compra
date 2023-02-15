import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'
function Navbar(){
  return (
    <header className="header"> 
    <div className="titulo">
      <h1>
        <NavLink to = '/' >Pokecompra</NavLink>
      </h1>
    </div>
      <nav className="navegacion">
        <ul className="navegacion__lista">
          <li className="navegacion__barra">
            <NavLink to = '/categoria/pokemon'> Pokemones</NavLink>
            </li>
            <li className="navegacion__barra">
            <NavLink to = '/categoria/pokeballs'> Pokeballs</NavLink>
            </li>
            <li className="navegacion__barra">
            <NavLink to = '/categoria/pociones'> Pociones</NavLink>
            </li>
        </ul>
      </nav> 
      <CartWidget/> 
    </header>
   
  )

  
   
}
export default Navbar