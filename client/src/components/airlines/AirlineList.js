import React, { useState, useEffect} from 'react'
import AirlineItem from "./AirlineItem"

const AirlineList = () => {
  const [airlines, setAirlines] = useState([])


  const getAirlines = async () => {
    const response = await fetch("/airlines")
    const data = await response.json()
    setAirlines(data)
  }

  useEffect(()=> {
    getAirlines()
  }, [])



  return (
    <div>
      {airlines.map(airline => <AirlineItem key={airline.id} airline={airline} />)}
    </div>
  )
}

export default AirlineList
