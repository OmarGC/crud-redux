import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { getRoutes } from '../routes/Router'

import Nav from '../components/shared/Header/Navbar'

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          { getRoutes() }
        </Switch>
      </div>
    </Router>
  )
}

export default App
