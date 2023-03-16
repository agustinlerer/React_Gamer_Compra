import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc, getDocs, getFirestore, query, where,doc,orderBy } from 'firebase/firestore'

import { useCartContext } from "../CartContext/CartContext"
import { NavLink } from "react-router-dom"
import Itemcount from "../Itemcount/Itemcount"
import './Itemdetailcontainer.css'



function Itemdetailcontainer (){
    const { agregarCart } = useCartContext()
    const [pokemons, setPokemons] = useState([])
    const [count, setCount]= useState(0)
    const { namepokemon}= useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'pokemones', namepokemon)
        getDoc(queryDoc)
        .then(respProd => setPokemons(  { id: respProd.id, ...respProd.data() }  ))
        .catch(err => console.error(err))
     

    },[])
    console.log(pokemons)
    
    
    function onAdd(cantidad){
        setCount(cantidad)
        agregarCart( { ...pokemons, cantidad } )
    }





    console.log(pokemons)
    return(
        <div className="container-fluid Detalle" >
            <article className="row ">
                  <div className="col-sm-12 col-md-6 col-lg-6 ">         
                <img className="imagendetalle" src={pokemons.imagen}alt={pokemons.name}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center informacion" >
                <h2>{pokemons.name} </h2>
                <p className="textodetalle">{pokemons.decrpcion}</p>
                <p className="textodetalle">precio: {pokemons.precio}</p>
                {
                count===0?
                (<p className="contador"><Itemcount onAdd={onAdd}/></p>)
                :( <NavLink to = '/cart'> <button >Finalizar Comprar</button></NavLink>  )
                }
                
            </div>
            </article>
          
            
                
            



        </div>
    )

    
}
export default Itemdetailcontainer