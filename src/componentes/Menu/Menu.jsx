import Carrito from "../Carrito/Carrito"
import './Menu.css'
function Menu(){
  return (
    <header className="header"> 
    <div className="titulo">
      Gamer Compra
    </div>
      <nav className="navegacion">
        <ul className="navegacion__lista">
          <li className="navegacion__barra"><a href="">Item A</a></li>
          <li className="navegacion__barra"><a href="">Item B</a></li>
           <li className="navegacion__barra"><a href="">Item C</a></li>
        </ul>
      </nav> 
      <Carrito/> 
    </header>
   
  )

  
   
}
export default Menu