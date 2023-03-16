import { useCartContext } from "../CartContext/CartContext"
import './Cartlist.css'

function Cartlist(){
    const { cartList, vaciarCarrito, precioTotal,eliminarProducto} = useCartContext() 
    console.log(cartList)
    return(        
        
        <div>{
            cartList.map(prodCart => (
                <div className= " carritocontenedor  ">        
                    <div className="imagencart ">
                        <img  src={prodCart.imagen} className='' />
                    </div>
                    <div className="  contenedordetellas" key={prodCart.name}>  
                        <p className="textocarrito"> 
                            Nombre: {prodCart.name} - 
                            cantidad: {prodCart.cantidad} - 
                            precio: {prodCart.precio}
                        </p>  
                        <button onClick={()=>eliminarProducto(prodCart.name)}>X</button>
                    </div> 

                </div>        
            ))    
        }
            <h3 className="textocarritovacio"> Precion Total: {precioTotal()}</h3>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
    }             
   
export default Cartlist