import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputTextIcon = (props) => (
  <section className='input-text-icon'>
    <span className='input-text-icon-icon'>{props.icon}</span>
    <input className='input-text-icon-box' placeholder={props.placeholder}/>
  </section>
)

InputTextIcon.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

export default InputTextIcon
