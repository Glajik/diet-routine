import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'

import HeaderImage from '../../MyComponents/HeaderImage/HeaderImage'
import styled from './SecondSlide.module.css'

const { Title } = Typography

const SecondSlide = ({ image, text, header }) => {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Title level={3} className={styled.phrase}>
        {header}
      </Title>
      <div className={styled.explanationText}>{text}</div>
    </div>
  )
}

SecondSlide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SecondSlide
