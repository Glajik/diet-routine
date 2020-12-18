import React from 'react'

import HeaderImage from '../MyComponents/HeaderImage/HeaderImage'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import Header from '../MyComponents/Header/Header'
import image from '../../assets/images/girlFirstPage.svg'
import styled from './OnboardingPage.module.css'
import { useDispatch } from 'react-redux'
import { handleClose } from '../../redux/actions/drawerActions'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import ForgotPassword from '../ForgotPassword/ForgotPassword'

const WelcomePage = () => {
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(handleClose())
  }
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Header text={['Sign up or', <br />, 'try out right now']}/>
      <ButtonGroup />
      <QuestionFooter />
      <Login onClose={onClose} />
      <SignUp onClose={onClose} />
      <ForgotPassword onClose={onClose} />
    </div>
  )
}

export default WelcomePage
