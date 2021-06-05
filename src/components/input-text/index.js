import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputText = (props) => {
  const [value, setValue] = useState('')
  const input = (
    <section className='input-text'>
      <input value={value} onChange={e => setValue(e.target.value)} className='input-text-box' placeholder={props.placeholder}/>
    </section>
  )
  return [value, input]
}

InputText.propTypes = {
  placeholder: PropTypes.string
}

export default InputText
