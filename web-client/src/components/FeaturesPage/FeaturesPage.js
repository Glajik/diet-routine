import React from 'react'
import { useHistory } from 'react-router-dom'
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
  HeaderWrapper,
  Wrapper
} from './style'

const FeaturesPage = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <HeaderWrapper>
        <BackdropWrapper>
          <Backdrop onClick={()=>history.push('/welcome_page')}/>
        </BackdropWrapper>
        <LogoWrapper>
          <Logo/>
        </LogoWrapper>
        <WelcomeAnimation>
          <HelloUser />   
        </WelcomeAnimation>
      </HeaderWrapper>
      <CardsAnimated>
        <FeaturesCards/>
        <ButtonGroup>
          <SingleButton>
            <Button type='button' btnType='secondary' id='button_features'><FormattedMessage id='register'/></Button>
          </SingleButton>
          <SingleButton>
            <Button
              type='button'
              btnType='primary'
              onClick={() => history.push('/main')}><FormattedMessage id='start'/></Button>
          </SingleButton>
        </ButtonGroup>
      </CardsAnimated>
    </Wrapper>
  )
}

export default FeaturesPage