import React from 'react'
import PropTypes from 'prop-types'

const DropDown = ({ titleCity, titleRegion, titleCountry }) => {
  return (
    <div>
      <div className='region-container'>
        <div className='region-title'>{titleRegion}</div>
        <select className='region-table'>
          <option value='all'> default </option>
        </select>
      </div>

      <div className='country-container'>
        <div className='country-title'>{titleCountry}</div>
        <select className='country-table'>
          <option value='all'> default </option>
        </select>
      </div>

      <div className='city-container'>
        <div className='city-title'>{titleCity}</div>
        <select className='city-table'>
          <option value='all'> default </option>
        </select>
      </div>
    </div>
  )
}

DropDown.defaultProps = {
  titleRegion: 'Region:  ',
  titleCountry: 'Country:  ',
  titleCity: 'City:  '
}

DropDown.propTypes = {
  titleRegion: PropTypes.string.isRequired,
  titleCountry: PropTypes.string.isRequired,
  titleCity: PropTypes.string.isRequired
}

export default DropDown
