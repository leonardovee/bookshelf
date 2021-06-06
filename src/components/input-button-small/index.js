import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputButtonSmall = (props) => (
  <section className='input-button-small'>
    <button className='input-button-small-button' onClick={e => props.onClick()}>{props.placeholder}</button>
  </section>
)

InputButtonSmall.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func
}

export default InputButtonSmall
