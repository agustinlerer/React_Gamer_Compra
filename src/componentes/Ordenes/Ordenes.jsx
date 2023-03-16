import { collection, getFirestore, addDoc, getDocs, query, where } from 'firebase/firestore'
import {  useState } from 'react'
import Swal from 'sweetalert2'
import './Ordenes.css'
const Ordenes = () => {
    const [ordenes, setOrdenes] = useState([]);
    const [buscador, setBuscador] = useState({ email: '' });
  
    const Busacadorchange = (event) => {
      setBuscador({
        ...buscador,
        [event.target.name]: event.target.value,
      });
    };
  
    const buscarOrdenes = (event) => {
      event.preventDefault();
      const db = getFirestore();
      const queryCollection = collection(db, 'ordenes');
      const queryFilter = query(queryCollection, where('comprador.email', '==', buscador.email));
  
      getDocs(queryFilter)
        .then((respCollection) =>
        {if(respCollection.docs.length>0){
            setOrdenes(
            respCollection.docs.map((prod) => {
              return {
                id: prod.id,
                comprador: prod.data().comprador,
                email: prod.data().comprador.email,
                ...prod.data(),
              };
            })
          )}
          else{
            Swal.fire({
                icon: 'error',
                title: 'No se encontraron órdenes',
                text: `No se encontraron órdenes para el correo electrónico ${buscador.email}`,
              });
            setBuscador({email:''})
          }}
          
        )
        .catch((err) => console.log(err));
    };
  
    const vaciarOrdenes = () => {
      setOrdenes([]);
      setBuscador({ email: '' });
    };
  
    return (
      <div>
        {ordenes.length > 0 ? (
          <>
            
            {ordenes.map((orden) => (
              <div key={orden.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">Orden {orden.id}</h5>
                  <p className="card-text">Comprador: {orden.comprador.nombre}</p>
                  <p className="card-text">Email: {orden.email}</p>
                  <p className="card-text">Total: ${orden.precioTotal}</p>
                </div>
              </div>
            ))}
            <button onClick={vaciarOrdenes}>voler al buscador</button>
          </>
        ) : (
          <form className="form-group" onSubmit={buscarOrdenes}>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={Busacadorchange}
              value={buscador.email}
              placeholder="Ingrese su email"
              required
            />
            <button>Buscar</button>
          </form>
          
        
        )}
      </div>
    );
  };
  
  export default Ordenes;
  
  