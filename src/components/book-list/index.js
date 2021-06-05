import React from 'react'
import { Grid } from '@material-ui/core'
import BookListBook from '../book-list-book'
import './index.css'

const BookList = () => {
  const books = [
    {
      name: 'The One Thing',
      author: 'Gary Keller'
    }
  ]
  return (
    <div className='book-list'>
      <Grid container spacing={3}>
        {books && books.map((book, idx) => (
          <Grid key={idx} item xs={4} sm={3} xl={1}>
            <BookListBook name={book.name} author={book.author}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BookList
