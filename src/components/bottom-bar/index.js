import React from 'react'
import { FaBookOpen, FaHeadphones, FaShare } from 'react-icons/fa'
import BottomBarButton from '../bottom-bar-button'
import BottomBarButtonDivider from '../bottom-bar-button-divider'
import './index.css'

const BottomBar = () => (
  <footer className='bottom-bar'>
    <BottomBarButton icon={<FaBookOpen/>} placeholder='Read'/>
    <BottomBarButtonDivider/>
    <BottomBarButton icon={<FaHeadphones/>} placeholder='Listen'/>
    <BottomBarButtonDivider/>
    <BottomBarButton icon={<FaShare/>} placeholder='Share'/>
  </footer>
)

export default BottomBar
