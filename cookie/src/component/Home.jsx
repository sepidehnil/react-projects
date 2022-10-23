import React from 'react'
import Cookies from 'universal-cookie';


function Home() {
  var [cookiename , setCookies] = React.useState({
    name:"John",
    age:30,
    city:"New York",
  })
  const myjson = JSON.stringify(cookiename)
  const obj = JSON.parse(myjson)

  function handleCookie(){
    const cookies = new Cookies();
    cookies.set( obj, { path: '/' });
  }

//  const [cookies, setCookie] = useCookies(obj);                  /// اینجا رو نمیدونم درسته یا نه

//function handleCookie(){
  //setCookie(obj ,{
  //  path : "/"  //we used path: "/" to access the cookie in all pages.
  //})
//}
  
  return (
    <div>
    <h1>React cookies</h1>
    <button onClick={handleCookie}>Set Cookie</button>
    </div>

  )
}

export default Home