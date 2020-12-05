import React from 'react'
import { Typography } from 'antd'
import styled from '../OnboardingPage.module.css'

const { Title } = Typography

const Phrase = ({ text }) => {
  return (
    <Title level={3} className={styled.phrase}>
      {text}
    </Title>
  )
}

export default Phrase
