import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import BookListBook from '../book-list-book'
import api from '../../services/api.js'
import './index.css'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    load()
  }, [setBooks])

  const getQuery = () => {
    return window.location.search
  }

  const load = async () => {
    const response = await api.get(`/books${getQuery()}`)
    if (!response.data) return
    setBooks(response.data)
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
    </div>
  )
}

export default BookList
