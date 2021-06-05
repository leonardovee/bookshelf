import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'debounce'
import './index.css'

const route = debounce(value => {
  const query = (new URLSearchParams({ book: value })).toString()
  window.location = `/search/${query}`
}, 1500)

const SearchBook = (props) => {
  const [value, setValue] = useState('')

  const debounceHandleChange = useCallback(value => route(value), [])

  const handleChange = (e) => {
    debounceHandleChange(e)
    setValue(e)
  }

  return (
    <section key='input-text-search' className='input-text-icon'>
      <span className='input-text-icon-icon'>{props.icon}</span>
      <input value={value} onChange={e => handleChange(e.target.value)} className='input-text-icon-box' placeholder={props.placeholder}/>
    </section>
  )
}

SearchBook.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.object
}

export default SearchBook
