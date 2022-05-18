import React from 'react'
import { WiDaySleetStorm } from 'weather-icons-react'

const WeatherReport = () => {
  return (
    <div className='weather-report'>
      <div className='day'>Monday</div>
      {/* <div className='location'>region, county</div> */}
      <WiDaySleetStorm className='weather-icon' />
      <div className='temperature'>28°C</div>
      <div className='extra-info'>
        <div className='wind'>Wind: 4kmph</div>
        <div className='precip'>Precip: 0mm </div>
        <div className='pressure'>Presure: 1014mb </div>
      </div>
    </div>
  )
}

export default WeatherReport
