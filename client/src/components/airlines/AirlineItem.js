import React from 'react'


const AirlineItem = ( {airline }) => {
  return (
    <div>
      <h3>{airline.name}</h3>
      <h4>Average Rating:{airline.average_score}</h4>
    </div>
  )
}

export default AirlineItem
