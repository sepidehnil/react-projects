import React, { useEffect, useState } from 'react'
import Items from './Items'

const List = () => {
    var [data , setData] = useState([])

      const  handleclick =()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setData(json);
        })
    };


    useEffect(() => {    
       handleclick()
    },[]) 
  
  return data.map(item=><Items item={item}/>)
   
}

export default List