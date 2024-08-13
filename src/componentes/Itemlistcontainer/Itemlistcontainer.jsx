import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where,orderBy } from 'firebase/firestore';
import "./Itemlistcontainer.css";

const Itemlistcontainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const { idCategory } = useParams()
  
    useEffect(()=>{
        
        const db = getFirestore()        
        const queryCollection = collection(db, 'pokemones')
        const queryFilter = idCategory ? query(queryCollection, where( 'categoria', '==' , idCategory)) : query(queryCollection, orderBy('categoria',"desc"))               
        getDocs(queryFilter)
        .then(respCollection => setPokemons( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => console.error(err))
       

        
    }, [idCategory])


return !pokemons.length ? (
    <div className='Loading'>Loading...</div>
) : (
    <div className='style-cards'>
        {
            pokemons.map(pokemon => (
                <Item pokemon = {pokemon}/>
                )
            )
         }
        </div>
)}
    
  
export default Itemlistcontainer