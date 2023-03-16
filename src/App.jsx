
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Itemdetailcontainer from './componentes/Itemdetailcontainer/Itemdetailcontainer'
import Cartcontanier from './componentes/Cartcontanier/Cartcontanier'

import './App.css'
import { CartContextProvider } from './componentes/CartContext/CartContext';
import Ordenes from './componentes/Ordenes/Ordenes';




function App() {

  return (
    <div >
    <BrowserRouter>
      <CartContextProvider> 
        <Navbar/>
        <Routes>  
          <Route path='/' element = {<Itemlistcontainer />}/>
          <Route path='/categoria/:idCategoria' element = { <Itemlistcontainer/>} />
          <Route path = '/detalle/:namepokemon' element = {<Itemdetailcontainer/>} />
          <Route path='/cart' element={<Cartcontanier/>}/>
          <Route path='/Ordenes' element= {<Ordenes/>}/>
        </Routes>  
      </CartContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
