import React from 'react'

import HeaderImage from '../../MyComponents/HeaderImage/HeaderImage'
import Header from '../../MyComponents/Header/Header'

import styled from './FirstSlide.module.css'

const FirstSlide = ({ image, text, header }) => {
  return (
    <div className={styled.container}>
      <HeaderImage image={image} />
      <Header text={header} />
      <div className={styled.explanationText}>{text}</div>
    </div>
  )
}

export default FirstSlide
