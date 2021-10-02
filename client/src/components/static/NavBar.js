import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = ( { currentUser, setUserToNull }) => {

  const logoutUser = async ()=> {
    const options = {
      method:"DELETE",
      headers:{"Content-Type":"applicaiton/json"}
    }
    fetch(`/logout`, options)
    .then(response=> response.json)
    .then(data => console.log(data))
    setUserToNull()
  }

  return (
<ul>
  <li><NavLink to="/">Home</NavLink>  </li> 
  <li>{currentUser ? <NavLink to="/" onClick={logoutUser}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}</li>
  {currentUser ? null : <li><NavLink to="/signup">Sign up</NavLink></li>}
</ul>
  )
}

export default NavBar
