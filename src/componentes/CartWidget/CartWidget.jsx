import { useCartContext } from '../CartContext/CartContext'
import './CartWidget.css'


function CartWidget() {
  const { cartList, totalProducts} = useCartContext()
    return (
      <div > 
       <a>{totalProducts()}</a> 
      <a className='cart' ></a>
      </div>
    )
  }
  export default CartWidget