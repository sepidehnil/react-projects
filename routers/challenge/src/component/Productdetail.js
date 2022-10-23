import React from 'react'
import {useParams} from 'react-router-dom'
import productitems from './productitems'

function Productdetail() {
    var {hdiwhed} = useParams()
    var thisproduct = productitems.find(function(product){
    return product.id === hdiwhed
    })

  return (
    <div>
        <h1>{thisproduct.name}</h1>
        <p>Price: ${thisproduct.price}</p>
        <p>{thisproduct.description}</p>
    </div>
  )
}

export default Productdetail