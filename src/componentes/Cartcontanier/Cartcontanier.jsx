import { useCartContext } from "../CartContext/CartContext"
import "./Cartcontanier.css"
import { NavLink } from "react-router-dom"
import Cartlist from "../Cartlist/Cartlist"
import Form from "../Form/Form"
const Cartcontanier =( ) => {
    const { cartList} = useCartContext()
    
    
    if(cartList.length>0){
      return (
      <div className="cartContainer" >
        <Cartlist/> 
        <Form/>
      </div>
    )}
    else{
      return(
        <div>
          <h1 className="textempty">Su carrito esta vacio...</h1>
          <NavLink to='/'> 
            <button className="buttonCart">LLenelo con algo </button>
          </NavLink>
        </div>
        
      )
    }
    
    
}
export default Cartcontanier