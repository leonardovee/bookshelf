import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputTextArea = (props) => (
  <section className='input-text-area'>
    <textarea className='input-text-area-box' placeholder={props.placeholder} rows={props.rows}/>
  </section>
)

InputTextArea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number
}

export default InputTextArea
