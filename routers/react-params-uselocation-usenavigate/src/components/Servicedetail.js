import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import servicesdata from '../servicesdata'

function Servicedetail() {
    var {jhsdfjh} = useParams()
    var navigate = useNavigate()
    var thisservice = servicesdata.find(function(service){ ///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        return service._id === jhsdfjh
    })
    function handleclick(){
      return navigate("/home")
    }
  return (
    <div>
    <h1>Service detail</h1>
    <h3>{thisservice.name} - ${thisservice.price}</h3>
    <h3>{thisservice.description}</h3>
    <button onClick={handleclick}>Go back to all services</button>
    </div>
  )
}

export default Servicedetail