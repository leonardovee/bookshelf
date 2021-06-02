import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Greeting = (props) => (
  <h3 className='greeting'>Hi, <a className='greeting-user'>{props.user}</a> 👋</h3>
)

Greeting.propTypes = {
  user: PropTypes.string
}

export default Greeting
