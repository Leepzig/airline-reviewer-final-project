import React from 'react'
import AirlineItem from '../airlines/AirlineItem'
import { useHistory, useParams } from 'react-router-dom'

const ReviewListItem = ( { currentUser, review }) => {

  const history = useHistory()
  const { id } = useParams()
  const handleEdit = () => {
    history.push(`/airlines/${id}/review/${review.id}`)
  }

  const handleDelete = async () => {
    const options = {
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    }
    const response = await fetch(`/reviews/${review.id}`, options)
    const data = await response.json()
  }

  return (
    <div>
      <li key={review.id}>
        <p>{review.title}</p>
        <p>{review.score} star{review.score > 1? "s" : ""}</p>
        <p>{review.content}</p>
        {currentUser ? currentUser.id === review.user.id ? <div><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button></div>: null : null }
      </li>
    </div>
  )
}

export default ReviewListItem
