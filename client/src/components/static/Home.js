import React from 'react'
import AirlineList from '../airlines/AirlineList'
import { useState, useEffect } from 'react'

const Home = () => {
  const [topAirline, setTopAirline] = useState()
  const [airlines, setAirlines] = useState([])
  const [loading, setLoading] = useState(true)


  const getAirlines = async () => {
    const response = await fetch("/airlines")
    const data = await response.json()
    setAirlines(data)
    setTopAirline(data[0])
    setLoading(false)
  }

  useEffect(()=> {
    getAirlines()
  }, [])

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Welcome To Airline Reviews!</h1>
      <h2>Congratualions to {topAirline.name} for being our best rated airline!</h2>
      <div>
        <AirlineList airlines={airlines}/>
      </div>
    </div>
  )
}

export default Home
