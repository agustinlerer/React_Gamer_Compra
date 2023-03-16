import { useCartContext } from '../CartContext/CartContext'
import './CartWidget.css'


function CartWidget() {
  const { cartList, vaciarCarrito } = useCartContext()
    return (
      <div > 
       <a>{cartList.length}</a> 
      <a className='carrito' ></a>
      </div>
    )
  }
  export default CartWidget