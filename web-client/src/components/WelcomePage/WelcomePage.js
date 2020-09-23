import React from 'react'
import {
  Wrapper,
  HeaderImageDiv,
  LogoWrapper,
  HeaderPhrase,
  PhraseAuthor,
  PhraseDiv,
  FormWrapper,
  NameQuestion
} from './style'
import logo from '../../assets/images/logo.svg'

const WelcomePage = () => {
  return (
    <Wrapper>
      <HeaderImageDiv>
        <LogoWrapper src={logo} />
        <PhraseDiv>
          <HeaderPhrase>”Нет любви более искренней, чем  <br/> любовь к еде!”</HeaderPhrase>
          <PhraseAuthor>Джордж Бернард Шоу</PhraseAuthor>
        </PhraseDiv>
      </HeaderImageDiv>
      <FormWrapper>
        <NameQuestion>
          Как тебя зовут?
        </NameQuestion>
      </FormWrapper>
    </Wrapper>
  )
}

export default WelcomePage
