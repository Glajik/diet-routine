import React from 'react'
import {FormattedMessage} from 'react-intl'

import {ReactComponent as Backdrop} from '../../assets/images/backdrop.svg'
import {ReactComponent as Logo} from '../../assets/images/logo_feature.svg'
import {Button} from '../UI'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import HelloUser from './HelloUser/HelloUser'

import {
  BackdropWrapper,
  ButtonGroup,
  CardsAnimated,
  LogoWrapper,
  SingleButton,
  WelcomeAnimation,
  Wrapper
} from './style'

const FeaturesPage = () => {
  return (
    <Wrapper>
      <WelcomeAnimation>
        <BackdropWrapper>
          <Backdrop/>
        </BackdropWrapper>
        <LogoWrapper>
          <Logo/>
        </LogoWrapper>
        <HelloUser/>
      </WelcomeAnimation>
      <CardsAnimated>
        <FeaturesCards/>
        <ButtonGroup>
          <SingleButton>
            <Button type='button' btnType='secondary' id='button_features'><FormattedMessage id='register'/></Button>
          </SingleButton>
          <SingleButton>
            <Button type='button' btnType='primary'><FormattedMessage id='start'/></Button>
          </SingleButton>
        </ButtonGroup>
      </CardsAnimated>
    </Wrapper>
  )
}

export default FeaturesPage