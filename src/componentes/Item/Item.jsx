import { Link } from "react-router-dom"
import './Item.css'
function Item ({pokemon}){
    return(
        <div key={pokemon.name} className="card w-25 mt-3 items" >
        <div className="card-header texto">
          <h2>{pokemon.name}</h2>
        </div>
        <img className="w-100" src={pokemon.imagen}alt={pokemon.name}/>
      
       
        <div className="card-footer texto ">
          <Link to={`/detalle/${pokemon.name}`}>
            <button className="btn boton w-100 texto">Detalle</button>
          </Link>
        </div>

      </div>
    )
}
export default Item