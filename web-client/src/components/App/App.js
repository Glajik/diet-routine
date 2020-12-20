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

import { connect, useSelector } from 'react-redux'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'

import {getCurrentUserId} from '../../redux/actions/profileAction'
import {ua} from '../../i18n'
import 'antd/dist/antd.css'
import { Wrapper } from './style'

import {
  AddProduct,
  CalendarPage,
  ProductSearch,
  Profile,
  OnboardingPage,
  Main,
  OnBoardingSlider
} from '../index'

const PublicSide = () => (
  <>
    <Route path="/try_out" component={OnBoardingSlider} />
    <Route path="/" component={OnboardingPage} />
    <Redirect to="/" />
  </>
)

const PrivateSide = () => (
  <>
    <Redirect exact from="/" to="/main" />
    <Route path="/add-product" component={AddProduct} />
    <Route path="/calendar" component={CalendarPage} />
    <Route path="/product-search" component={ProductSearch} />
    <Route path="/profile" component={Profile} />
    <Route path="/main" component={Main} />
  </>
)

const App = (props) => {
  const { setCurrentUserId, location } = props
  
  const userId = 1
  setCurrentUserId(userId)

  // Get auth data from firebase
  const auth = useSelector(state => state.firebase.auth)
  console.log("state.firebase.auth", auth)

  // Wait auth loading. Maybe we should show spinner?
  if (!auth.isLoaded) {
    return 'Loading ...'
  }

  return (
    <div className="App">
      <IntlProvider locale={navigator.language} messages={ua}>
        <Wrapper>
          <Switch location={location}>
            { // If user not logined, redirect to the public
              // part of the application
              !auth.uid
                ? <PublicSide />
                : <PrivateSide />
            }
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
