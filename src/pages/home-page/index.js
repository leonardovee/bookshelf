import React from 'react'
import InputText from '../../components/input-text'
import TypographyGreeting from '../../components/typography-greeting'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import ScrollableBookList from '../../components/scrollable-book-list'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const HomePage = () => (
  <section className='home-page'>
    <InputText placeholder='Search a book' icon={<FaSearch/>}/>
    <TypographyGreeting user={'Mehmed Al Fatih'}/>
    <ScrollableBookList/>
    <NavigationBottomBar/>
  </section>
)

export default HomePage
