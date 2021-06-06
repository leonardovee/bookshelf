import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const BottomBarButton = (props) => (
  <div className='bottom-bar-button'>
    <div className='bottom-bar-buttom-icon'>{props.icon}</div>
    <div className='bottom-bar-buttom-text'>{props.placeholder}</div>
  </div>
)

BottomBarButton.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

export default BottomBarButton
