import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>
      <h1 className='weather-header'>
        {' '}
        {title}
        <img className='RI' src='favicon.ico' alt='React_Icon' />
      </h1>
    </div>
  )
}

Header.defaultProps = {
  title: 'Weather Tracking'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
