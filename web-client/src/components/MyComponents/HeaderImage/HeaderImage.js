import React from 'react'
import styled from './HeaderImage.module.css'

const HeaderImage = ({ image }) => {
  return (
    <div className={styled.imageContainer}>
      <img alt="" src={image} className={styled.image} />
    </div>
  )
}

export default HeaderImage
