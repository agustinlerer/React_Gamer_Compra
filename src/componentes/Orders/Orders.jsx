import { collection, getFirestore, addDoc, getDocs, query, where } from 'firebase/firestore'
import {  useState } from 'react'
import Swal from 'sweetalert2'
import './Orders.css'
const orders = () => {
    const [orders, setOrders] = useState([]);
    const [seeker, setSeeker] = useState({ email: '' });
  
    const seekerChange = (event) => {
      setSeeker({
        ...seeker,
        [event.target.name]: event.target.value,
      });
    };
  
    const searchOrders = (event) => {
      event.preventDefault();
      const db = getFirestore();
      const queryCollection = collection(db, 'ordenes');
      const queryFilter = query(queryCollection, where('comprador.email', '==', seeker.email));
  
      getDocs(queryFilter)
        .then((respCollection) =>
        {if(respCollection.docs.length>0){
            setOrders(
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
                text: `No se encontraron órdenes para el correo electrónico ${seeker.email}`,
              });
            setSeeker({email:''})
          }}
          
        )
        .catch((err) => console.log(err));
    };
  
    const vaciarorders = () => {
      setOrders([]);
      setSeeker({ email: '' });
    };
  
    return (
      <>
        {orders.length > 0 ? (
          <section>
            <div className='cards-container'>
               {orders.map((orden) => (

              <div key={orden.id} className="card ">
                <div className="card-body">
                  <h5 className="card-title">Orden {orden.id}</h5>
                  <p className="card-text">Comprador: {orden.comprador.name}</p>
                  <p className="card-text">Email: {orden.email}</p>
                  <p className="card-text">Total: ${orden.precioTotal}</p>
                </div>
              </div>
            ))}
            </div>
           
            <button className='buttonOrders' onClick={vaciarorders}>voler al buscador</button>
          </section>
        ) : (
          <form className="form-group" onSubmit={searchOrders}>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={seekerChange}
              value={seeker.email}
              placeholder="Ingrese su email"
              required
            />
            <button className='buttonOrders'>Buscar</button>
          </form>
          
        
        )}
      </>
    );
  };
  
  export default orders;
  
  