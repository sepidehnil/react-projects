import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function Profile() {
  return (
    <div>
    <h1>Profile Page</h1>
    <ul className='id2'>
        <li className='id'><Link to="/profile/info">Profile Info</Link></li>
        <li className='id'><Link to="/profile/settings">Profile Settings</Link></li>
    </ul>
    </div>
    
  )
}

export default Profile