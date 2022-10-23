import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import productitems from './productitems'

function Product() {
    var productlist = productitems.map(function(info){
        return (
            <div key={info.id}>
            <h3><Link to={`/product/${info.id}`}>{info.name}</Link></h3>
            <p>${info.price}</p>
            <hr/>
            </div>
        )
    })
  return (
    <div>
        <h1>avalible items</h1>
        {productlist}
        <h3></h3>
    </div>
  )
}

export default Product