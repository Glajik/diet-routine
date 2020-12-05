import React from 'react'

import HeaderImage from '../OnboardingPage/HeaderImage/HeaderImage'

import image from '../../assets/images/girlLoginPage.svg'
import styled from '../OnboardingPage/OnboardingPage.module.css'
import Phrase from '../OnboardingPage/Phrase/Phrase'
import LoginForm from './LoginForm/LoginForm'

const SignUp = () => {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Phrase text="Login" />
      <LoginForm />
    </div>
  )
}

export default SignUp
