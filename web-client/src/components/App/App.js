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
import {IntlProvider} from 'react-intl'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
// import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {getCurrentUserId} from '../../redux/actions/profileAction'
import {en} from '../../i18n'
import 'antd/dist/antd.css'
import { Wrapper } from './style'

import {
  AddProduct,
  CalendarPage,
  FeaturesPage,
  ProductSearch,
  Profile,
  OnboardingPage,
  Main,
} from '../index'

const App = (props) => {
  const userId = '2x9bJliY7Beq6eN7v8K54YPifmu1'
  props.setCurrentUserId(userId)

  return (
    <div className="App">
      <IntlProvider locale={navigator.language} messages={en}>
        <Wrapper>
          {/*<TransitionGroup>*/}
            {/*<CSSTransition key={props.location.key} classNames="fade" timeout={1000}>*/}
              {/*<Switch location={props.location}>*/}
                {/*/!*<Route exact path="/" component={FirstPage}/>*!/*/}
              {/*</Switch>*/}
            {/*</CSSTransition>*/}
          {/*</TransitionGroup>*/}
          <Switch location={props.location}>
            <Route path="/features" component={FeaturesPage}/>
            <Route path="/add-product" component={AddProduct}/>
            <Route path="/product-search" component={ProductSearch}/>
            <Route path="/calendar" component={CalendarPage}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/main" component={Main}/>
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpassword" component={ForgotPassword} /> */}
            <Route path="/features" component={FeaturesPage} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product-search" component={ProductSearch} />
            <Route path="/profile" component={Profile} />
            <Route path="/main" component={Main} />
            <Route path="/" component={OnboardingPage} />
          </Switch>
        </Wrapper>
      </IntlProvider>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUserId: (id) => dispatch(getCurrentUserId(id))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
