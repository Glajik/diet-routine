
import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'

import HeaderImage from '../../MyComponents/HeaderImage/HeaderImage'
import styled from './FirstSlide.module.css'

const { Title } = Typography

const FirstSlide = ({ image, text, header }) => {
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

FirstSlide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
}

export default FirstSlide
