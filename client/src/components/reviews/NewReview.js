import React, { useState} from 'react'

const NewReview = ( {airline, currentUser} ) => {
  const [form, setForm] = useState(
    {
      title:"",
      score:1,
      content:"",
      airline_id: airline.id,
      user_id: currentUser.id
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
    submitForm()
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
      body:JSON.stringify(form)
    }
    //TODO This route should probably be nested
    const response = await fetch(`/reviews`, options)
    const data = await response.json()
    airline.reviews.push(data)
    currentUser.reviews.push(data)
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title"/><br/>
        <input type="text" name="score" value={form.score} onChange={handleChange} placeholder="Score"/><br/>
        <input type="text" name="content" value={form.content} onChange={handleChange} placeholder="Score comments"/><br/>
        <input type="submit" placeholder="Submit"/>
      </form>
      
    </div>
  )
}

export default NewReview
