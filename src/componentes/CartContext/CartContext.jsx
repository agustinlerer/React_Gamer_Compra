
import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 


export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // logica de no repetir el product
    const agregarCart = (producto) => {
        const productoEnCarrito = cartList.find((item) => item.name === producto.name);
        if (productoEnCarrito) {
          setCartList(
            cartList.map((item) =>
              item.name === producto.name
                ? { ...item, cantidad: item.cantidad + producto.cantidad }
                : item
            )
          );
        } else {
          setCartList([...cartList, producto ]);
          
        }
        console.log(cartList)
      };
      
    const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.precio), 0)
    const eliminarProducto = (name) => setCartList(cartList.filter(producto => producto.name !== name))

    const vaciarCarrito = () =>{
        setCartList([])
    }
 
    return (
        <CartContext.Provider value={{
            cartList, 
            agregarCart,
            vaciarCarrito,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}