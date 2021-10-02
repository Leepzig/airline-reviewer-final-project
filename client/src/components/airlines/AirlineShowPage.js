import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NewReview from '../reviews/NewReview'
import ReviewListItem from '../reviews/ReviewListItem'

const AirlineShowPage = ( { currentUser }) => {
  const [airline, setAirline] = useState("")
  const [loading, setLoading] = useState(true)
  const [addingReview, setAddingReview] = useState(false)
  const { id } = useParams()

  const getAirline = async () => {
    const response = await fetch(`/airlines/${id}`)
    const data = await response.json()
    setAirline(data)
    setLoading(false)
  }

  useEffect(()=> {
    getAirline()
  }, [])

  if (loading) return <h2>Loading...</h2>
  return (
    <div>
      <h2>{airline.name}</h2>
      <p>airline.</p>
      <p>blah blah</p>
      {currentUser ? <button onClick={() => setAddingReview(true)}>Add a Review</button> : null}
      {addingReview ? <NewReview airline={airline}  currentUser={currentUser} /> : null }
      <h4>reviews</h4>
      <ul>
      {airline.reviews.map( review => <ReviewListItem key={review.id} currentUser={currentUser} review={review} airline={airline}/>)}
      </ul>
    </div>
  )
}

export default AirlineShowPage
