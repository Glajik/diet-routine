import React from 'react'
import { Wrapper } from './style'
import Logo from './Logo/Logo'
import HelloUser from './HelloUser/HelloUser'
import FeaturesCards from './FeaturesCards/FeaturesCards'
import ButtonGroup from './ButtonGroup/ButtonGroup'

const FeaturesPage = () => {
  return (
    <Wrapper>
      <Logo />
      <HelloUser />
      <FeaturesCards />
      <ButtonGroup />
    </Wrapper>
  )
}

export default FeaturesPage