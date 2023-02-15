import { Link } from "react-router-dom"
function Item ({pokemon}){
    return(
        <div key={pokemon.name} className="card w-25 mt-3" >
        <div className="card-header">
          <h2>{pokemon.name}</h2>
        </div>
        <img className="w-100" src={pokemon.imagen}alt={pokemon.name}
        />
      
       
        <div className="card-footer">
          <Link to={`/detalle/${pokemon.name}`}>
            <button className="btn btn-outline-dark w-100">Detalle</button>
          </Link>
        </div>

      </div>
    )
}
export default Item