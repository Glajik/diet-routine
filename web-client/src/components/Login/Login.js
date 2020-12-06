import React from 'react'

import HeaderImage from '../OnboardingPage/HeaderImage/HeaderImage'

import image from '../../assets/images/girlLoginPage.svg'
import styled from './Login.module.css'

import Phrase from '../OnboardingPage/Phrase/Phrase'
import LoginForm from './LoginForm/LoginForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'

const Login = () => {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Phrase text="Login" />
      <LoginForm />
      <QuestionFooter />
    </div>
  )
}

export default Login
