import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Inicio from './Pages/Inicio'
import Navbar from './components/NavBar'

import CategoriaProducto from './Pages/CategoriaProducto'
import Producto from './Pages/Producto'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={''} ></Route>
      <Route path='/registro' element={''} ></Route>
      <Route path='*' element={<Navbar/>} ></Route>
    </Routes>
    
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/registro' element={<Register/>} ></Route>
      <Route path='/inicio' element={<Inicio/>} ></Route>
      <Route path='/producto/categoria' element={<CategoriaProducto/>} ></Route>
      <Route path='/producto' element={<Producto/>} ></Route>

    </Routes>
    </>
  )
}

export default App
