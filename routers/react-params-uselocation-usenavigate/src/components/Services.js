import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import servicesdata from '../servicesdata'

function Services() {
  var location = useLocation() //easy access to information about location in your app
  console.log(location)
  //hash: ""
  //key: "21ra4ylc"
  //pathname: "/services" این بهمون جایی که الان در وب هستیم را نشن میده
  //search: ""  رو نشون میده urlادامه ادرس در
  //state: null 
    var list = servicesdata.map(function(info){
        return <h3><Link to={`/services/${info._id}`}>{info.name}</Link> - ${info.price}</h3>
    })
  return (
    <div>
        <h1>Services List Page</h1>
        {list}
    </div>
  )
}

export default Services