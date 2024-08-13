import { useState } from "react"
import { useCartContext } from "../CartContext/CartContext"
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import "./Form.css"
import Swal from 'sweetalert2'
const Form = () => {
    
    const { cartList, vaciarCarrito, precioTotal} = useCartContext()
    const [formdata, setFormdata]=useState({
        name:'',
        email: '',
        validacion_email:'',
        tel:''
      })
      
      const handleonchange=(event)=>{
        setFormdata({
          ...formdata,
          [event.target.name]:  event.target.value
        })
      }
     
      const generador_de_orden=(event)=>{
        if(formdata.email == formdata.validacion_email){ 
          event.preventDefault()
          const orden={}
          orden.comprador = formdata
          orden.precioTotal = precioTotal()
          orden.productos = cartList.map(({id,name,precio})=>({id,name,precio}))
        
          const db = getFirestore()
          const queryCollection = collection(db,'ordenes')
        
          addDoc(queryCollection,orden)
          .then(resp=> console.log(resp))
          .catch(err=>console.log(err))
          .finally(()=>{
            vaciarCarrito()
            setFormdata({
              name:'',
              email: '',
              validacion_email:'',
              tel:''
            })
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: 'Muchas gracias',
              })
          }) 
        }
        else{
          event.preventDefault()
          console.log("error")
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos',
          })
        }
       
      }
    
    
    
    return(
        <div className="Border Form">
            <h3 className="textempty">Datos del comprador</h3>
            <form className="form-group" onSubmit={generador_de_orden}>
              <input className="form-control Form" type='text' name="name"             onChange={handleonchange}  value={formdata.name}              placeholder="Ingrese su nombre"   required/>
              <input className="form-control Form" type='text' name="tel"              onChange={handleonchange}  value={formdata.tel}               placeholder="Ingrese su telefono" required/>
              <input className="form-control Form" type='text' name="email"            onChange={handleonchange}  value={formdata.email}             placeholder="Ingrese su email"    required/>
              <input className="form-control Form" type='text' name="validacion_email" onChange={handleonchange}  value={formdata.validacion_email}  placeholder="Repita su mail"      required/>
              <button className="buttonCartform " >Comprar</button>
            </form>
        </div>
    )
}
export default Form