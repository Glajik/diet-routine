import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Start from '../Start'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Start} />
      </Switch>
    </div>
  )
}

export default App