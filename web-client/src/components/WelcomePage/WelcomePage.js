import React from 'react'
import { Wrapper, HeaderImageDiv, LogoWrapper, HeaderPhrase, PhraseAuthor } from './style'
import logo from '../../assets/images/logo.svg'

const WelcomePage = () => {
  return (
    <Wrapper>
      <HeaderImageDiv>
        <LogoWrapper src={logo} />
        <HeaderPhrase>
          ”Нет любви более искренней, чем любовь к еде!”
      </HeaderPhrase>
        <PhraseAuthor>
          Джордж Бернард Шоу
      </PhraseAuthor>
      </HeaderImageDiv>
    </Wrapper>
  )
}

export default WelcomePage