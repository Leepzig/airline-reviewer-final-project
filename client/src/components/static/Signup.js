import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ( { loginUser }) => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    password_confirmation:""
  })

  const history = useHistory()
  
  const handleChange = e => {
    setForm(
      {...form,
      [e.target.name]:e.target.value}
    )
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const options = {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    }
    const response = await fetch(`signup`, options)
    const data = await response.json()
    loginUser(data)
    history.push("/")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="name" /><br/>
        <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email" /><br/>
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="password" /><br/>
        <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} placeholder="password_confirmation" />
        <input type="submit" placeholder="Submit" />
      </form>
      
    </div>
  )
}

export default Signup
