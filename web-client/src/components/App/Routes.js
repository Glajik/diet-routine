import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import {
  AddProduct,
  CalendarPage,
  ProductSearch,
  ProfilePage,
  OnboardingPage,
  Main,
  OnBoardingSlider,
} from '../index'

const PublicSide = () => (
  <Switch>
    <Route path="/try_out" component={OnBoardingSlider} />
    <Route path="/" exact component={OnboardingPage} />
    <Redirect to="/" />
  </Switch>
)

const PrivateSide = () => (
  <Switch>
    <Route path="/add-product" component={AddProduct} />
    <Route path="/calendar" component={CalendarPage} />
    <Route path="/product-search" component={ProductSearch} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/" exact component={Main} />
    <Redirect to="/" />
  </Switch>
)

const Routes = ({ isAuthorized }) =>
  isAuthorized
    ? <PrivateSide />
    : <PublicSide />

export default Routes
