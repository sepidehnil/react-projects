import React from 'react'
import { Link , Routes , Route} from 'react-router-dom'
import Home from './Componet/Home'
import Info from './Componet/Info'
import Profile from './Componet/Profile'
import Settings from './Componet/Settings'


export default function App() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/profile/settings' element={<Settings />}/>
        <Route path="/profile/info" element={<Info/>}/>
        </Routes>
      
    </div>
  )
}



