import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const BookListBook = (props) => {
  const redirect = () => {
    window.location = `/details-book/${props._id}`
  }

  return (
    <div onClick={redirect}>
      <div className='book-list-book'></div>
      <p className='book-list-book-name'>{props.name}</p>
      <p className='book-list-book-author'>by {props.author}</p>
    </div>
  )
}

BookListBook.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string
}

export default BookListBook
