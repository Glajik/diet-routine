import React from 'react'

import HeaderImage from '../MyComponents/HeaderImage/HeaderImage'
import Header from '../MyComponents/Header/Header'
import styled from './ForgotPassword.module.css'
import image from '../../assets/images/girlLoginPage.svg'
import ButtonBack from '../MyComponents/ButtonBack/ButtonBack'
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'

const ForgotPassword = () => {
  return (
    <div className={styled.container}>
      <ButtonBack />
      <HeaderImage image={image} />
      <Header text="Password assistance" />
      <div className={styled.explanationText}>
        Enter your email to recover your password. You will receive an email with
        instructions
      </div>
      <ForgotPasswordForm />
      <QuestionFooter />
    </div>
  )
}

export default ForgotPassword
