
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Itemdetailcontainer from './componentes/Itemdetailcontainer/Itemdetailcontainer'
import Cartcontanier from './componentes/Cartcontanier/Cartcontanier'

import './App.css'
import { CartContextProvider } from './componentes/CartContext/CartContext';
import Orders from './componentes/Orders/Orders';




function App() {

  return (
    <div >
    <BrowserRouter>
      <CartContextProvider> 
        <Navbar/>
        <Routes>  
          <Route path='/' element = {<Itemlistcontainer />}/>
          <Route path='/category/:idCategory' element = { <Itemlistcontainer/>} />
          <Route path = '/detail/:namepokemon' element = {<Itemdetailcontainer/>} />
          <Route path='/cart' element={<Cartcontanier/>}/>
          <Route path='/Orders' element= {<Orders/>}/>
        </Routes>  
      </CartContextProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
