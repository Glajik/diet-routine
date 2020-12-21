import React from 'react'
import PropTypes from 'prop-types'
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

HeaderDrawer.propTypes = {
  text: PropTypes.string.isRequired,
}

export default HeaderDrawer
