import { styleCards } from "./itemlist.style.js"
import { addDoc, collection, doc, getDoc, getFirestore, writeBatch } from "firebase/firestore"
import Item from "../Item/Item.jsx"
function Itemlist({pokemones}) {
  
  
  
  return (
      
       <div style={styleCards}>
        {
        pokemones.map(pokemon => (
            <Item pokemon = {pokemon}/>
            )
          )
        }
        </div>
    )
  }
  
  export default Itemlist
  