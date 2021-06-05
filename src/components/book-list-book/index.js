import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const BookListBook = (props) => (
  <Fragment>
    <div className='book-list-book'></div>
    <p className='book-list-book-name'>{props.name}</p>
    <p className='book-list-book-author'>by {props.author}</p>
  </Fragment>
)

BookListBook.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string
}

export default BookListBook
