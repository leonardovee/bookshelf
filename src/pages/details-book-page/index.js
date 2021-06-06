import React, { useEffect, useState } from 'react'
import api from '../../services/api.js'
import wavedHalfCircle from '../../assets/waved-half-circle.svg'
import transparentCircle from '../../assets/transparent-circle.svg'
import wavedCircle from '../../assets/waved-circle.svg'
import pinkSmallCircle from '../../assets/pink-small-circle.svg'
import blackCircle from '../../assets/black-circle.svg'
import { FaArrowLeft } from 'react-icons/fa'
import BottomBar from '../../components/bottom-bar/index.js'
import './index.css'

const DetailsBookPage = () => {
  const [book, setBook] = useState({})

  useEffect(() => {
    load()
  }, [setBook])

  const previous = () => {
    window.history.back()
  }

  const getQuery = () => {
    return window.location.pathname.split('/').pop()
  }

  const load = async () => {
    const response = await api.get(`/books/${getQuery()}`)
    if (!response.data) return
    setBook(response.data)
  }

  return (
    <section className='details-book-page'>
      <section onClick={previous} className='details-book-page-button'>
          <FaArrowLeft/>
      </section>
      <section className='details-book-page-book'>
        <section className='details-book-page-book-cover'></section>
      </section>
      <section className='details-book-page-art'>
        <section className='details-book-page-art-row-1'>
          <img src={wavedHalfCircle} className='details-book-page-art-row-1-waved-half-circle'/>
        </section>
        <section className='details-book-page-art-row-2'>
          <div className='details-book-page-art-row-2-expansible'></div>
          <img src={transparentCircle} className='details-book-page-art-row-2-transparent-circle'/>
        </section>
        <section className='details-book-page-art-row-3'>
          <img src={pinkSmallCircle} className='details-book-page-art-row-3-pink-small-circle'/>
          <img src={blackCircle} className='details-book-page-art-row-3-black-circle'/>
          <div className='details-book-page-art-row-3-expansible'></div>
        </section>
        <section className='details-book-page-art-row-4'>
          <div className='details-book-page-art-row-4-expansible'></div>
          <img src={wavedCircle} className='details-book-page-art-row-4-waved-circle'/>
        </section>
      </section>
      <h4 className='details-book-page-heading'>{book.name}</h4>
      <p className='details-book-page-author'>{book.author}</p>
      <p className='details-book-page-description'>{book.description}</p>
      <BottomBar/>
    </section>
  )
}

export default DetailsBookPage
