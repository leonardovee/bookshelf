import React, { Fragment, useState } from 'react'
import TypographyColoredSmall from '../typography-colored-small'
import PropTypes from 'prop-types'
import './index.css'

const InputText = (props) => {
  const [value, setValue] = useState('')
  const input = (
    <Fragment>
      <section className='input-text'>
        <input value={value} onChange={e => setValue(e.target.value)} className='input-text-box' placeholder={props.placeholder}/>
      </section>
      {!value ? <TypographyColoredSmall text={`The ${props.name} field is required`}/> : <></>}
    </Fragment>
  )
  return [value, input]
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string
}

export default InputText
