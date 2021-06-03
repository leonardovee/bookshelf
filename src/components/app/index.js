import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddBookPage from '../../pages/add-book-page'
import HomePage from '../../pages/home-page'
import './index.css'

const App = () => (
  <main className='app'>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/add-book' component={ AddBookPage }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App
