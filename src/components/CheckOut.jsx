import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

const CheckOut =()=>{

    const [pedidoId,setPedidoId] = useState("");
    const {carrito,precioTotal,vaciarCarrito} = useContext(CartContext);
    const {register, handleSubmit} = useForm();

    
const comprar =(data)=>{
   const pedido = {
    cliente: data,
    productos:carrito,
    total : precioTotal()
   }
  
   const pedidoRef = collection(db,"pedidos");
   addDoc(pedidoRef,pedido)
   .then((doc)=>{
    setPedidoId(doc.id)
    vaciarCarrito()
   })
   //el addDoc nos devuelve una promesa con ella podemos manejar el id del objeto que enviamos
} 
if (pedidoId) {
    return (
        <div className="container">
            <h1 className="main-title">Muchas gracias por tu compra</h1>
            <p>Tu número de pedido es: {pedidoId}</p>
        </div>
    )
}
    return(
        <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <input type="text"  placeholder="Ingresa tu nombre"  {...register("nombre")}/>
            <input type="email" placeholder="Ingresa tu correo" {...register("email")}/>
            <input type="phone" placeholder="Ingresa tu tel" {...register("telefono")}/>
            <button type="submit">Comprar</button>
            </form>
            </div>
    )
}

export default CheckOut;