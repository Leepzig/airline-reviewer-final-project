import React, { useState} from 'react'

const NewReview = () => {
  const [form, setForm] = useState(
    {
      title:"",
      score:1,
      content:"",
    }
  )

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    setForm({
      title:"",
      score:1,
      content:"",
    })
  }

  const submitForm = async () => {
    const options = {
      method:"POST",
      headers:{"Content-Type":"application/json"}, //TODO set up the proper id load
      body:JSON.stringify({...form, user_id:1, airline_id:1})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title"/>
        <input type="text" name="score" value={form.score} onChange={handleChange} placeholder="Score"/>
        <input type="text" name="content" value={form.content} onChange={handleChange} placeholder="Score comments"/>
        <input type="submit" placeholder="Submit"/>
      </form>
      
    </div>
  )
}

export default NewReview
