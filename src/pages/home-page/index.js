import React from 'react'
import InputText from '../../components/input-text'
import TypographyGreeting from '../../components/typography-greeting'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const HomePage = () => (
  <section className='home-page'>
    <InputText placeholder='Search a book' icon={<FaSearch/>}/>
    <TypographyGreeting user={'Mehmed Al Fatih'}/>
    <NavigationBottomBar/>
  </section>
)

export default HomePage
