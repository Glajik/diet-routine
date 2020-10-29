import React from 'react'
import { Wrapper, BackdropWrapper, WelcomeAnimation, CardsAnimated } from './style'
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
        <Logo />
        <HelloUser />
      </WelcomeAnimation>
      <CardsAnimated>
        <FeaturesCards />
        <Button type='button' btnType='secondary' id='button_features'><FormattedMessage id='register'/></Button>
        <Button type='button' btnType='primary'><FormattedMessage id='start'/></Button>
      </CardsAnimated>
    </Wrapper>
  )
}

export default FeaturesPage