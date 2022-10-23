import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'
import Productdetail from './component/Productdetail'


function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      <Routes>
        <Route exact path='/product/:hdiwhed' element={<Productdetail/>} />
      </Routes>
    </div>
  )
}

export default App