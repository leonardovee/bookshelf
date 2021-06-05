import React from 'react'
import InputTextIcon from '../../components/input-text-icon'
import TypographyGreeting from '../../components/typography-greeting'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import BookList from '../../components/book-list'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const HomePage = () => (
  <section className='home-page'>
    <InputTextIcon placeholder='Search a book' icon={<FaSearch/>}/>
    <TypographyGreeting user={'Mehmed Al Fatih'}/>
    <BookList/>
    <NavigationBottomBar/>
  </section>
)

export default HomePage
