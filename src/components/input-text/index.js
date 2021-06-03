import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputText = (props) => (
  <section className='input-text'>
    <span className='input-text-icon'>{props.icon}</span>
    <input className='input-text-box' placeholder={props.placeholder}/>
  </section>
)

InputText.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

export default InputText
