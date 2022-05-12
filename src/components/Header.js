import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddEvent, showAdd }) => {
  return (
    <header className='header'>
      <h1> {title}</h1>
      <Button
        backgroundColor={showAdd ? 'red' : 'blue'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAddEvent}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
} 

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header
