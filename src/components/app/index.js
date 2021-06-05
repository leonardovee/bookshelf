import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddBookPage from '../../pages/add-book-page'
import HomePage from '../../pages/home-page'
import SearchPage from '../../pages/search-page'
import './index.css'

const App = () => (
  <main className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/add-book' component={ AddBookPage }/>
        <Route path='/search' component={ SearchPage }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App
