import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../Firebase/config";

export const ItemsDetailContainer = ()=>{

    const [item,setItem] = useState(null);
    const id = useParams().id;

  useEffect(()=>{
    const docRef = doc(db,"productos",id)
  //  la variable docRef tiene como idea poder trabajar con un producto de la collecion x eso el id para poder identificarlo
  getDoc(docRef)
  .then((resp)=>{
    setItem({...resp.data(),id: resp.id})
  })
},[id])
    return(
        <div>
            {item && <ItemDetail  item={item}/>}</div>
    )
}