import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../gFetch/gFetch"
import Itemcount from "../Itemcount/Itemcount"



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
        <div className="detalle" >
            <div>         
                <img className="w-100" src={pokemons.imagen}alt={pokemons.name}/>
            </div>
            <div>
                <h2>{pokemons.name}</h2>
                <h3>{pokemons.precio}</h3>
            </div>
            <div>
                <Itemcount/>
            </div>
       


        </div>
    )

    
}
export default Itemdetailcontainer