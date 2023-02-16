
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar/Navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer'
import Itemdetailcontainer from './componentes/Itemdetailcontainer/Itemdetailcontainer'


import './App.css'




function App() {

  return (
    <div >
    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path='/' element = {<Itemlistcontainer />}/>
        <Route path='/categoria/:idCategoria' element = { <Itemlistcontainer/>} />
        <Route path = '/detalle/:namepokemon' element = {<Itemdetailcontainer/>} />
      
    </Routes>  
      
    
    
    
    </BrowserRouter>
    </div>
  )
}

export default App
