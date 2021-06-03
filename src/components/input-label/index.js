import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputLabel = (props) => (<label className='label'>{props.text}</label>)

InputLabel.propTypes = {
  text: PropTypes.string
}

export default InputLabel
