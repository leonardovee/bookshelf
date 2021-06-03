import React from 'react'
import InputText from '../../components/input-text'
import TypographyGreeting from '../../components/typography-greeting'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const HomePage = () => (
  <section className='home-page'>
    <InputText placeholder='Search a book' icon={<FaSearch/>}/>
    <TypographyGreeting user={'Mehmed Al Fatih'}/>
  </section>
)

export default HomePage
