import React from 'react'
import SearchBook from '../../components/search-book'
import TypographyGreeting from '../../components/typography-greeting'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import BookList from '../../components/book-list'
import { FaSearch } from 'react-icons/fa'
import './index.css'

const HomePage = () => {
  return (
    <section className='home-page'>
      <SearchBook placeholder='Search a book' icon={<FaSearch/>}/>
      <TypographyGreeting user={'Mehmed Al Fatih'}/>
      <BookList/>
      <NavigationBottomBar/>
    </section>
  )
}

export default HomePage
