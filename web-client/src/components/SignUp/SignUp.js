import React from 'react'

import HeaderImage from '../UI/HeaderImage/HeaderImage'
import Header from '../UI/Header/Header'

import styled from './SignUp.module.css'
import image from '../../assets/images/girlLoginPage.svg'

function SignUp() {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Header text="Sign up" />
    </div>
  )
}

export default SignUp
