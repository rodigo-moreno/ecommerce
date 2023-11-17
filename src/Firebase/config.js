
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa9Ej7N4yxvBfeAsLqblXPRzq0CNm6kVw",
  authDomain: "rodrishop-44383.firebaseapp.com",
  projectId: "rodrishop-44383",
  storageBucket: "rodrishop-44383.appspot.com",
  messagingSenderId: "660796627394",
  appId: "1:660796627394:web:1343f7dece4a5ada365e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);//es la constante que representa la base de datos