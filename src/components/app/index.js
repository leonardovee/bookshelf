import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../home'
import './index.css'

const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App
