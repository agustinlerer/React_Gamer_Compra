import { useCartContext } from "../CartContext/CartContext"


import { NavLink } from "react-router-dom"
import './Cartcontanier.css'
import Cartlist from "../Cartlist/Cartlist"
import Formulario from "../Formulario/Formulario"
const Cartcontanier =( ) => {
    const { cartList} = useCartContext()
    
    
    if(cartList.length>0){
      return (
      <div>
        <Cartlist/> 
        <Formulario/>
      </div>
    )}
    else{
      return(
        <div>
          <h1 className="textocarritovacio">Su carrito esta vacio...</h1>
          <NavLink to='/'> 
            <button>LLenelo con algo </button>
          </NavLink>
        </div>
        
      )
    }
    
    
}
export default Cartcontanier