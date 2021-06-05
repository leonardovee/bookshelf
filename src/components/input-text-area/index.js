import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputTextArea = (props) => {
  const [value, setValue] = useState('')
  const input = (
    <section className='input-text-area'>
      <textarea value={value} onChange={e => setValue(e.target.value)} className='input-text-area-box' placeholder={props.placeholder} rows={props.rows}/>
    </section>
  )
  return [value, input]
}

InputTextArea.propTypes = {
  placeholder: PropTypes.string,
  rows: PropTypes.number
}

export default InputTextArea
