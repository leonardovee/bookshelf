import React from 'react'
import './index.css'

const Home = () => (
  <section className='home'>
    <section className='search'>
      <input className='search-box' placeholder='Search book'/>
    </section>
    <h3 className='greeting'>Hi, <a className='greeting-user'>Mehmed Al Fatih</a> 👋</h3>
  </section>
)

export default Home
