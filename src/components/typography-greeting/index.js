import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypographyGreeting = (props) => (
  <h3 className='typography-greeting'>Hi, <a className='typography-greeting-user'>{props.user}</a> 👋</h3>
)

TypographyGreeting.propTypes = {
  user: PropTypes.string
}

export default TypographyGreeting
