import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Servicedetail from './components/Servicedetail'
import Services from './components/Services'



function App() {
  return (
    <div>
      <nav>
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Header />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/services/:jhsdfjh' element={<Servicedetail/>} />
      </Routes>
    </div>
  )
}

export default App