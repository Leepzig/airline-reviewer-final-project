import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ReviewShowEdit = ( ) => {
  const {id, review_id} = useParams()
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState()
  const [form, setForm] = useState({
    title:"",
    score:"",
    content:""
  })
  debugger

  const getReview = async () => {
    const response =  await fetch(`/reviews/${review_id}`)
    const data = await response.json()
    setReview(data)
    setLoading(false)
  }

  useEffect(() => {
    getReview()
  },[])

  // debugger
  const history =  useHistory()

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    const options = {
      method:"PATCH",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({...form})
    }
    const response = await fetch(`/reviews`, options)
    const data = await response.json()
    //What to do with the data
    history.push(`/airlines/${id}`)
  }

  if (review === null) return <h1>Loading...</h1>
  setForm({
    title:review.title,
    score:review.score,
    content:review.content
  })

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

export default ReviewShowEdit
