import React from 'react'
import Header from './weatherComponent/Header'
import DropDown from './weatherComponent/DropDown'
import WeatherContainer from './weatherComponent/WeatherContainer'

const weatherApp = () => {
  return (
    <div className='container'>
      <Header />
      <DropDown />
      <WeatherContainer />
    </div>
  )
}

export default weatherApp
