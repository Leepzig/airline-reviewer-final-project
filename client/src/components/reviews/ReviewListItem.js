import React from 'react'
import AirlineItem from '../airlines/AirlineItem'

const ReviewListItem = ( { currentUser, review }) => {

  // debugger
  // if (!review) return <h1>Loading...</h1>
  return (
    <div>
      <li key={review.id}>
        <p>{review.title}</p>
        <p>{review.score} star{review.score > 1? "s" : ""}</p>
        <p>{review.content}</p>
        {currentUser ? currentUser.id === review.user.id ? <div><button>Edit</button><button>Delete</button></div>: null : null }
      </li>
    </div>
  )
}

export default ReviewListItem
