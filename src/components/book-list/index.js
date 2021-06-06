import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import BookListBook from '../book-list-book'
import InputButtonSmall from '../input-button-small'
import api from '../../services/api.js'
import './index.css'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    load()
  }, [setBooks])

  const getQuery = () => {
    const queryString = window.location.search
    if (!queryString) return '?true'
    return queryString
  }

  const load = async () => {
    const response = await api.get(`/books${getQuery()}`)
    if (!response.data) return
    setBooks(response.data)
  }

  const more = async () => {
    const response = await api.get(`/books${getQuery()}&offset=${books.length}`)
    if (!response.data[0]) return
    setBooks(books => [...books, response.data[0]])
  }

  return (
    <div className='book-list'>
      <Grid container spacing={3}>
        {books && books.map((book, idx) => (
          <Grid key={idx} item xs={4} sm={3} xl={1}>
            <BookListBook _id={book._id} name={book.name} author={book.author}/>
          </Grid>
        ))}
      </Grid>
      <InputButtonSmall onClick={more} placeholder='Load more' />
    </div>
  )
}

export default BookList
