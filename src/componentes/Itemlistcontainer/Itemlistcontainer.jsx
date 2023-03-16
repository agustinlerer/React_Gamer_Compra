import React, { useState, useEffect } from 'react';
import Itemlist from '../Itemlist/Itemlist';
import { useParams } from 'react-router-dom';
import { collection, getDoc, getDocs, getFirestore, query, where,doc,orderBy } from 'firebase/firestore'

const Itemlistcontainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const { idCategoria } = useParams()
  
    useEffect(()=>{
        
        const db = getFirestore()        
        const queryCollection = collection(db, 'pokemones')
        const queryFilter = idCategoria ? query(queryCollection, where( 'categoria', '==' , idCategoria)) : query(queryCollection, orderBy('categoria',"desc"))               
        console.log (queryFilter)
        getDocs(queryFilter)
        .then(respCollection => setPokemons( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => console.error(err))
       

        
    }, [idCategoria])


    console.log(pokemons)
    
    return pokemons.length > 0 ? (
        
        <Itemlist pokemones={pokemons}/>
        ) : (
        <div>Loading...</div>
        )}
    
  
  export default Itemlistcontainer