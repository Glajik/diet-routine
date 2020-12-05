import React from 'react'

import HeaderImage from './HeaderImage/HeaderImage'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import HaveAccount from './HaveAccount/HaveAccount'
import Phrase from './Phrase/Phrase'

import styled from './OnboardingPage.module.css'

const WelcomePage = () => {
  return (
    <div className={styled.container}>
      <HeaderImage />
      <Phrase text={['Sign up or', <br />, 'try out right now']} />
      <ButtonGroup />
      <HaveAccount />
    </div>
  )
}

export default WelcomePage
