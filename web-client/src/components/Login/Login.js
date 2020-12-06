import React from 'react'

import image from '../../assets/images/girlLoginPage.svg'
import styled from './Login.module.css'

import HeaderImage from '../UI/HeaderImage/HeaderImage'
import LoginForm from './LoginForm/LoginForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import Header from '../UI/Header/Header'

const Login = () => {
  return (
    <div className={styled.container}>
      <p className={styled.btnBack}>Back</p>
      <HeaderImage image={image} />
      <Header text="Login" />
      <LoginForm />
      <QuestionFooter />
    </div>
  )
}

export default Login
