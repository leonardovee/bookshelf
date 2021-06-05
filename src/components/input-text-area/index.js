import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import TypographyColoredSmall from '../typography-colored-small'
import './index.css'

const InputTextArea = (props) => {
  const [value, setValue] = useState('')
  const input = (
    <Fragment>
      <section className='input-text-area'>
        <textarea value={value} onChange={e => setValue(e.target.value)} className='input-text-area-box' placeholder={props.placeholder} rows={props.rows}/>
      </section>
      {!value ? <TypographyColoredSmall text={`The ${props.name} field is required`}/> : <></>}
    </Fragment>
  )
  return [value, input]
}

InputTextArea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number
}

export default InputTextArea
