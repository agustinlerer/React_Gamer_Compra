import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../gFetch/gFetch"
import Itemcount from "../Itemcount/Itemcount"
import './Itemdetailcontainer.css'



function Itemdetailcontainer (){
    const [pokemons, setPokemons] = useState([])
    const { namepokemon}= useParams()
    console.log(namepokemon)
    useEffect(()=>{
        gFetch(namepokemon)
        .then(resp => setPokemons(resp))
    },[])

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

                <p className="contador"><Itemcount/></p>
            </div>
            </article>
          
            
                
            



        </div>
    )

    
}
export default Itemdetailcontainer