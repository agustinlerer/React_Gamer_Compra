import { useCartContext } from "../CartContext/CartContext"
import './Cartlist.css'

function Cartlist(){
    const { cartList, emptyCart, totalPrice,removeProduct} = useCartContext() 
    return(        
        
        <div>{
            cartList.map(prodCart => (
                <div className= " containerCartList  ">        
                    <div className="imgcart ">
                        <img  src={prodCart.imagen} className='' />
                    </div>
                    <div className="containerdetails" key={prodCart.name}>  
                        <p className="textcart"> 
                            Nombre: {prodCart.name} - 
                            cantidad: {prodCart.count} - 
                            precio: {prodCart.precio}
                        </p>  
                       
                    </div> 
                    <aside>
                        <button className="buttonCart" onClick={()=>removeProduct(prodCart.name)}>X</button>
                    </aside> 

                </div>        
            ))    
        }
            <h3 className="textempty"> Precion Total: {totalPrice()}</h3>
            <button className="buttonCart" onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
    }             
   
export default Cartlist