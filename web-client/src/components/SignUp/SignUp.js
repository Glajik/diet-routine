import React from 'react'

import HeaderImage from '../MyComponents/HeaderImage/HeaderImage'
import Header from '../MyComponents/Header/Header'
import SignUpForm from './SignUpForm/SignUpForm'

import styled from './SignUp.module.css'
import image from '../../assets/images/girlLoginPage.svg'

function SignUp() {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Header text="Sign up" />
      <SignUpForm />
    </div>
  )
}

export default SignUp
