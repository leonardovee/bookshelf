import React from 'react'
import Search from '../search'
import Greeting from '../greeting'
import './index.css'

const Home = () => (
  <section className='home'>
    <Search/>
    <Greeting user={'Mehmed Al Fatih'}/>
  </section>
)

export default Home
