import React from 'react'
import SearchBook from '../../components/search-book'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import BookList from '../../components/book-list'
import { FaSearch } from 'react-icons/fa'
import queryString from 'query-string'
import './index.css'

const SearchPage = () => {
  return (
    <section className='search-page'>
      <SearchBook placeholder={queryString.parse(location.search).name} icon={<FaSearch/>}/>
      <BookList/>
      <NavigationBottomBar/>
    </section>
  )
}

export default SearchPage
