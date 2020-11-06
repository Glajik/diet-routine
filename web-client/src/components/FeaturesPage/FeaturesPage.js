import React from 'react'
import { Wrapper, BackdropWrapper, WelcomeAnimation, WelcomeAnimation2, CardsAnimated, LogoWrapper, ButtonGroup, SingleButton } from './style'
import HelloUser from './HelloUser/HelloUser'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import Button from '../UI/Button/index'
import { ReactComponent as Backdrop } from '../../assets/images/backdrop.svg'
import { ReactComponent as Logo } from '../../assets/images/logo_feature.svg'
import { FormattedMessage } from 'react-intl'

const FeaturesPage = () => {
  return (
    <Wrapper>
      <WelcomeAnimation>
        <BackdropWrapper>
          <Backdrop />
        </BackdropWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <WelcomeAnimation2>
          <HelloUser />   
        </WelcomeAnimation2>
      </WelcomeAnimation>
      <CardsAnimated>
        <FeaturesCards />
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