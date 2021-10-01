import React, {useState} from 'react'

const Login = ( {loginUser}) => {
  const [form, setForm] = useState({email:"", password:""})

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

  }

  const submitLogin = async () => {
    const options = {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:{form}
    }
    const response = await fetch(`/login`, options)
    const data = await response.json()
    loginUser(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={form.email} placeholder="email" onChange={handleChange} />
        <input type="password" name="password" value={form.password} placeholder="password" onChange={handleChange} />
      </form>
    </div>
  )
}

export default Login
