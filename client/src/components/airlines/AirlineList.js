import React from 'react'
import AirlineItem from "./AirlineItem"

const AirlineList = ( { airlines }) => {
  



  return (
    <ul>
      {airlines.map(airline => <AirlineItem key={airline.id} airline={airline} />)}
    </ul>
  )
}

export default AirlineList
