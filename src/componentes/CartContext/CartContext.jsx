
import { createContext, useContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 


export const CartContextProvider = ({children}) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // logica de no repetir el product
    const addCart = (product) => {
        const productEnCarrito = cartList.find((item) => item.name === product.name);
        if (productEnCarrito) {
          setCartList(
            cartList.map((item) =>
              item.name === product.name
                ? { ...item, count: item.count + product.count }
                : item
            )
          );
        } else {
          setCartList([...cartList, product ]);
          
        }
      };
      
    const totalPrice = () => cartList.reduce( (count, product) => count += (product.count*product.precio), 0)
    const totalProducts = () => cartList.reduce((count, product) => count += (product.count),0)
    const removeProduct = (name) => setCartList(cartList.filter(product => product.name !== name))

    const emptyCart = () =>{
        setCartList([])
    }
 
    return (
        <CartContext.Provider value={{
            cartList, 
            addCart,
            emptyCart,
            totalPrice,
            removeProduct,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}