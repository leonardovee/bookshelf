import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypographyColoredSmall = (props) => (
  <section className='typography-colored-small'>
    <p className='typography-colored-small-text'>{props.text}</p>
  </section>
)

TypographyColoredSmall.propTypes = {
  text: PropTypes.string
}

export default TypographyColoredSmall
