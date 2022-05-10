import PropTypes from 'prop-types'
import React from 'react'

// const onClick = (e) => {
//     console.log('clicked')
// }

const Button = ({backgroundColor, text, onClick}) => {
  return <button onClick ={onClick} 
                 style = {{backgroundColor: backgroundColor}} 
                 className = 'btn'>{text}
         </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
