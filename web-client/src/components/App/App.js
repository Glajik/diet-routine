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
import { IntlProvider } from 'react-intl'
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ru } from '../../i18n'

import { FeaturesPage, FirstPage, WelcomePage } from '../index'

import lazyLoading from '../../hoc/lazyLoading'

import RegistrationPage from '../RegistrationPage/RegistrationPage'
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage'
import In from '../In/In'
import { Wrapper } from './style'

const App = ({ location }) => {
  console.log(location)
  return (
    <div className="App">
      <IntlProvider locale={navigator.language} messages={ru}>
        <Wrapper>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={1000}>
              <Switch location={location}>
                <Route path="/welcome_page" component={WelcomePage} />
                <Route path="/features" component={FeaturesPage} />
                <Route path="/signup" component={RegistrationPage} />
                <Route path="/login" component={AuthorizationPage} />
                <Route path="/in" component={In} />
                <Route path="/" component={FirstPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Wrapper>
      </IntlProvider>
    </div>
  )
}

export default withRouter(App)
