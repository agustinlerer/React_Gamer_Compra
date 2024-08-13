import { Link } from "react-router-dom"
import './Item.css'
function Item ({pokemon}){
    return(
        <div key={pokemon.name} className="card w-25 mt-3 items" >
        <div className="card-header">
          <h2>{pokemon.name}</h2>
        </div>
        <img className="w-100" src={pokemon.imagen}alt={pokemon.name}/>
      
       
        <div className>
          <Link to={`/detail/${pokemon.id}`}>
            <button className="button ">Detalle</button>
          </Link>
        </div>

      </div>
    )
}
export default Item