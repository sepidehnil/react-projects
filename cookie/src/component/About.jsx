import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    var navigate = useNavigate()
    function handleclick(){
        return navigate ('/home')
        


    }
  return (
    <div>
        <div>about us</div>
        <button onClick={handleclick}>Back to Home</button>
    </div>
  )
}

export default About