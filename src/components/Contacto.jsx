import {useForm} from "react-hook-form";

const Contacto =()=>{

const {register, handleSubmit} = useForm();
const enviar =(data)=>{
    console.log(data)
} 
    return(
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text"  placeholder="Ingresa tu nombre"  {...register("nombre")}/>
                <input type="email" placeholder="Ingresa tu correo" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu tel" {...register("telefono")}/>
                <button type="submit">Enviar</button>
                </form>
                </div>
    )
}

export default Contacto;