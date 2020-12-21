import React from 'react'
import { Typography } from 'antd'

import styled from './Header.module.css'

const { Title } = Typography

const Header = ({ text }) => {
  return (
    <Title level={3} className={styled.phrase}>
      {text}
    </Title>
  )
}


export default Header
