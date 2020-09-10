/*
 We will need lazyLoading function when we will create more pages and when we will have to paste them to our routes. This
 function will import our components and render them only when user visit this rotes. This function makes our
  website much faster because when we load our project we don't wait until all components would be loaded. Also we
   need this function because user may not want to see other pages. In such case we don't need to load these pages. This
    function will load page only when user visit it. If he doesn't we don't load page.

    We can use lazyLoading function by writing such script:
      const asyncComponent = lazyLoading(() => {
        return import('./component')
      })

    (I understand that user may not visit registration form, but log in and registration form was created from the
     same component which I need to import by myself because I have to show log in form to users)
*/

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { IntlProvider } from 'react-intl'
import en from '../../i18n/locales/en'
import ru from '../../i18n/locales/ru'
import ua from '../../i18n/locales/ua'

import lazyLoading from '../../hoc/lazyLoading'

import Counter from '../Counter/Counter'
import SignInOrSignUpForm from '../SignInOrSignUpForm'

const App = () => (
  <div className="App">
    <IntlProvider locale={navigator.language} messages={ru}>
      <Switch>
        <Route path="/sign-up" render={() => <SignInOrSignUpForm signUp />} />
        <Route path="/sign-in" render={() => <SignInOrSignUpForm signIn />} />
        <Route exact path="/" component={Counter} />
      </Switch>
    </IntlProvider>
  </div>
)

export default App
