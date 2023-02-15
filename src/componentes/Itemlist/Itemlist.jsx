import { styleCards } from "./itemlist.style.js"
import Item from "../Item/Item.jsx"
function Itemlist({pokemons}) {

    
  
  return (
      
       <div style={styleCards}>
        {
        pokemons.map(pokemon => (
            <Item pokemon = {pokemon}/>
            )
          )
        }
        </div>
    )
  }
  
  export default Itemlist
  