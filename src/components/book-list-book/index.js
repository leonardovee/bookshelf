import React, { Fragment } from 'react'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import './index.css'

const BookListBook = (props) => (
  <Fragment>
    <Paper className='book-list-book'></Paper>
    <p className='book-list-book-name'>{props.name}</p>
    <p className='book-list-book-author'>by {props.author}</p>
  </Fragment>
)

BookListBook.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string
}

export default BookListBook
