import React from 'react'

import image from '../../assets/images/girlLoginPage.svg'
import styled from './Login.module.css'

import HeaderImage from '../MyComponents/HeaderImage/HeaderImage'
import LoginForm from './LoginForm/LoginForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import Header from '../MyComponents/Header/Header'
import ButtonBack from '../MyComponents/ButtonBack/ButtonBack'

const Login = () => {
  return (
    <div className={styled.container}>
      <ButtonBack />
      <HeaderImage image={image} />
      <Header text="Login" />
      <LoginForm />
      <QuestionFooter />
    </div>
  )
}

export default Login
