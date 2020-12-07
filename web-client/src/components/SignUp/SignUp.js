import React from 'react'

import HeaderImage from '../MyComponents/HeaderImage/HeaderImage'
import Header from '../MyComponents/Header/Header'
import SignUpForm from './SignUpForm/SignUpForm'

import styled from './SignUp.module.css'
import image from '../../assets/images/girlLoginPage.svg'
import QuestionFooter from '../OnboardingPage/QuestionFooter/QuestionFooter'
import ButtonBack from '../MyComponents/ButtonBack/ButtonBack'

function SignUp() {
  return (
    <div className={styled.container}>
      <ButtonBack />
      <HeaderImage image={image} />
      <Header text="Sign up" />
      <SignUpForm />
      <QuestionFooter />
    </div>
  )
}

export default SignUp
