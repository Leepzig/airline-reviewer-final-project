import React from 'react'
import { useHistory } from "react-router-dom"
import {useForm} from "../hooks/useForm"

const NewReview = ( {airline, currentUser} ) => {
  const [form, handleForm, resetForm] = useForm({
      title:"",
      score:1,
      content:"",
      airline_id: airline.id,
      user_id: currentUser.id
    })
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    submitForm()
    resetForm()
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
    history.push(`/airlines/${airline.id}/review/${data.id}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleForm} placeholder="Title"/><br/>
        <input type="text" name="score" value={form.score} onChange={handleForm} placeholder="Score"/><br/>
        <input type="text" name="content" value={form.content} onChange={handleForm} placeholder="Score comments"/><br/>
        <input type="submit" placeholder="Submit"/>
      </form>
      
    </div>
  )
}

export default NewReview
