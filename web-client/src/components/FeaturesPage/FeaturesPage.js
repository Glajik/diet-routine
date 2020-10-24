import React from 'react'
import { Wrapper, BackdropWrapper } from './style'
import HelloUser from './HelloUser/HelloUser'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import Button from '../UI/Button/index'
import { ReactComponent as Backdrop } from '../../assets/images/backdrop.svg'
import { ReactComponent as Logo } from '../../assets/images/logo_feature.svg'

const FeaturesPage = () => {
  return (
    <Wrapper>
      <BackdropWrapper>
        <Backdrop />
      </BackdropWrapper>
      <Logo />
      <HelloUser />
      <FeaturesCards />
      <Button type='button' btnType='secondary'>Регистрация</Button>
      <Button type='button' btnType='primary'>Уже начать</Button>
    </Wrapper>
  )
}

export default FeaturesPage