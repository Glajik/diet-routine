import React from 'react'
import { Typography } from 'antd'

import styled from './HeaderDrawer.module.css'

const { Title } = Typography

const HeaderDrawer = ({ text }) => {
  return (
    <Title level={3} className={styled.phrase}>
      {text}
    </Title>
  )
}

export default HeaderDrawer
