import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from '../Start'
import Demo from '../Demo'

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/demo" component={Demo} />
      <Route path="/" component={Start} />
    </Switch>
  </div>
)

export default App
