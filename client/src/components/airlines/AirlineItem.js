import React from 'react'
import { Link } from "react-router-dom"


const AirlineItem = ( {airline }) => {
  return (
    <li>
      <Link to={`/airlines/${airline.id}`}>
        <h3>{airline.name}</h3>
        <p>{airline.review_count} review{airline.review_count > 1 ? "s" : ""}</p>
        <p>Average Rating: {airline.average_score} star{airline.average_score > 1? "s" : ""}</p>
      </Link>
    </li>
  )
}

export default AirlineItem
