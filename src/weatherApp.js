import React from 'react'
import Header from './weatherComponent/Header'
import DropDown from './weatherComponent/DropDown'

const weatherApp = () => {
  return (
    <div className='container'>
      <Header />
      <DropDown />
    </div>
  )
}

export default weatherApp
