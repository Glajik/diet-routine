import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignInOrSignUpForm from '../SignInOrSignUpForm'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/sign-up" render={() => <SignInOrSignUpForm signUp/>}/>
        <Route path="/" render={() => <SignInOrSignUpForm signIn/>}/>
      </Switch>
    </div>
  )
}

export default App