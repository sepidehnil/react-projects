import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'

function App() {
  return (
    <div>
      <nav>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App