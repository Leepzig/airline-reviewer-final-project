import React from 'react'
import AirlineList from '../airlines/AirlineList'
import { useState } from 'react'

const Home = () => {
  const [topAirline, setTopAirline] = useState("")

  
  return (
    <div>
      <h1>Welome To Airline Reviews!</h1>
      <h2>Congratualions to {topAirline} for being our best rated airline!</h2>
      <div>
        <AirlineList />
      </div>
    </div>
  )
}

export default Home
