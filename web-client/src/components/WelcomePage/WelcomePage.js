import React from 'react'
import { Wrapper, HeaderImageDiv, LogoWrapper, HeaderPhrase } from './style'
import logo from '../../assets/images/logo.svg'

const WelcomePage = () => {
  return (
    <Wrapper>
      <HeaderImageDiv>
        <LogoWrapper src={logo} />
        <HeaderPhrase>
          ”Нет любви более искренней, чем любовь к еде!”
      </HeaderPhrase>
      </HeaderImageDiv>
    </Wrapper>
  )
}

export default WelcomePage