import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemsListContainer'
import { ItemsDetailContainer } from './components/ItemsDetailsContainer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import { CartContext, CartProvider } from './Context/CartContext';
import Carrito from './components/Carrito';
import CheckOut from './components/CheckOut';


function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
    <div>
   <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemsDetailContainer/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/contacto'element={<Contacto />}/>
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/checkout' element={<CheckOut />} />

      </Routes>
    
      </BrowserRouter>
      </CartProvider>
   
    </div>
    </>
  )
}

export default App
