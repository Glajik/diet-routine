import React from 'react'
import styled from '../OnboardingPage.module.css'
import image from '../../../assets/images/girlFirstPage.svg'

const HeaderImage = () => {
  return (
    <div className={styled.imageContainer}>
      <img alt="" src={image} className={styled.image} />
    </div>
  )
}

export default HeaderImage
