import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavigationBottomBarButton = (props) => (
  <Link
    to={props.route}
    className='navigation-bottom-bar-button'
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    {props.icon}
    <p className='navigation-bottom-bar-buttom-text'>{props.placeholder}</p>
  </Link>
)

NavigationBottomBarButton.propTypes = {
  route: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

export default NavigationBottomBarButton
