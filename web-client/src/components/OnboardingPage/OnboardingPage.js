import React from 'react'

import HeaderImage from '../UI/HeaderImage/HeaderImage'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import Header from '../UI/Header/Header'

import image from '../../assets/images/girlFirstPage.svg'
import styled from './OnboardingPage.module.css'

const WelcomePage = () => {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Header text={['Sign up or', <br />, 'try out right now']} />
      <ButtonGroup />
      <QuestionFooter />
    </div>
  )
}

export default WelcomePage
