import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import NavigationBottomBarButton from '../navigation-bottom-bar-button'
import './index.css'

const NavigationBottomBar = () => (
  <footer className='navigation-bottom-bar'>
    <NavigationBottomBarButton route='/' icon={<BiHomeAlt/>} placeholder='Home'/>
    <NavigationBottomBarButton route='/add-book' icon={<AiOutlinePlus/>} placeholder='Add book'/>
    <NavigationBottomBarButton route='/' icon={<AiOutlineUser/>} placeholder='Profile'/>
  </footer>
)

export default NavigationBottomBar
