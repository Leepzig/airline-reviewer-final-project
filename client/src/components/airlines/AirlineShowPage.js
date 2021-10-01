import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NewReview from '../reviews/NewReview'

const AirlineShowPage = () => {
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
      <button onClick={() => setAddingReview(true)}>Add a Review</button>
      {addingReview ? <NewReview airline={airline} /> : null }
      <h4>reviews</h4>
      <ul>
      {airline.reviews.map( review => <li key={review.id}><p>{review.title}</p><p>{review.score} star{review.score > 1? "s" : ""}</p><p>{review.content}</p></li>)}
      </ul>
    </div>
  )
}

export default AirlineShowPage
