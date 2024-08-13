import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'
function Navbar(){
  return (
    <header className="header"> 
    <div className="title">
      <h1>
        <NavLink to = '/' >Pokecompra</NavLink>
      </h1>
    </div>
      <nav >
        <ul className="Nav-List">
          <li className="Nav-bar">
            <NavLink to = '/category/pokemon'> Pokemones</NavLink>
            </li>
            <li className="Nav-bar">
            <NavLink to = '/category/pokeballs'> Pokeballs</NavLink>
            </li>
            <li className="Nav-bar">
            <NavLink to = '/category/pociones'> Pociones</NavLink>
            </li>
            <li className="Nav-bar">
            <NavLink to = '/Orders'> Ordenes</NavLink>
            </li>
        </ul>
      </nav> 
      <NavLink to= '/cart'>
        <CartWidget/> 
      </NavLink>
      
    </header>
   
  )

  
   
}
export default Navbar