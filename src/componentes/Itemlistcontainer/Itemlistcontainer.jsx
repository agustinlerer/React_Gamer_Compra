import React, { useState, useEffect } from 'react';
import Itemlist from '../Itemlist/Itemlist';
import { gFetch } from '../../gFetch/gFetch';
import { useParams } from 'react-router-dom';

const Itemlistcontainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const { idCategoria } = useParams()
    console.log (idCategoria)
    useEffect(()=>{
        if (idCategoria) {
            gFetch()
            .then(resp => setPokemons(resp.filter(producto=> producto.categoria === idCategoria)))
            .catch( err => console.log(err))
        } else {
            gFetch()
            .then(resp => setPokemons(resp))
            .catch( err => console.log(err))      
        }
        
    }, [idCategoria])
    
    return pokemons.length > 0 ? (
        <Itemlist pokemons={pokemons}/>
        ) : (
        <div>Loading...</div>
        )}
    
  
  export default Itemlistcontainer