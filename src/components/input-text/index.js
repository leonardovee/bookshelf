import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputText = (props) => (
  <section className='input-text'>
    <input className='input-text-box' placeholder={props.placeholder}/>
  </section>
)

InputText.propTypes = {
  placeholder: PropTypes.string
}

export default InputText
