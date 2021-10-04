import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ReviewShowEdit = ( ) => {

  const {id, review_id} = useParams()
  const [review, setReview] = useState(null)
  const [form, setForm] = useState({
  title:"",
  score:"",
  content:""
  })
  const history =  useHistory()
  
  const getReview = async () => {
    const response =  await fetch(`/reviews/${review_id}`)
    const data = await response.json()
    // debugger
    setReview(data)
    setForm({
    title:data.title,
    score:data.score,
    content:data.content
  })
  }

  useEffect(() => {
    getReview()
  },[])



//form functions
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const options = {
      method:"PATCH",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({...form})
    }
    const response = await fetch(`/reviews/${review_id}`, options)
    const data = await response.json()
    console.log(data)
    history.push(`/airlines/${id}`)
  }
  if (!review) return <h2>Loading..</h2>
  return (
    <div>
      <h2>Edit Review for {review.airline.name}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title"/><br/>
        <input type="text" name="score" value={form.score} onChange={handleChange} placeholder="Score"/><br/>
        <input type="text" name="content" value={form.content} onChange={handleChange} placeholder="Score comments"/><br/>
        <input type="submit" placeholder="Submit"/>
      </form>
    </div>
  )
}

export default ReviewShowEdit
