import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputButton = (props) => (
  <section className='input-button'>
    <button className='input-button-button' onClick={e => props.onClick()}>{props.placeholder}</button>
  </section>
)

InputButton.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func
}

export default InputButton
