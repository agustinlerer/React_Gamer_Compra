import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc, getDocs, getFirestore, query, where,doc,orderBy } from 'firebase/firestore'

import { useCartContext } from "../CartContext/CartContext"
import { NavLink } from "react-router-dom"
import Itemcount from "../Itemcount/Itemcount"
import './Itemdetailcontainer.css'



function Itemdetailcontainer (){
    const { addCart } = useCartContext()
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
    
    function onAdd(count){
        setCount(count)
        addCart( { ...pokemons, count } )
    }



    return(
        <div className="container-fluid Detail" >
            <article className="row ">
                  <div className="col-sm-12 col-md-6 col-lg-6 ">         
                <img className="imagdetail" src={pokemons.imagen}alt={pokemons.name}/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-self-center info capitalize-first-letter" >
                <h2>{pokemons.name} </h2>
                <p className="textdetail">{pokemons.decrpcion}</p>
                <p className="textdetail">precio: {pokemons.precio}</p>
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