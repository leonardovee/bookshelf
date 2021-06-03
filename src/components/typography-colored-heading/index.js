import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const TypographyColoredHeading = (props) => (
  <section className='typography-colored-heading'>
    <p className='typography-colored-heading-text'>{props.text}</p>
  </section>
)

TypographyColoredHeading.propTypes = {
  text: PropTypes.string
}

export default TypographyColoredHeading
