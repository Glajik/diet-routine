import React from 'react'
import PropTypes from 'prop-types'
import styled from './HeaderImage.module.css'

const HeaderImage = ({ image }) => {
  return (
    <div className={styled.imageContainer}>
      <img alt="" src={image} className={styled.image} />
    </div>
  )
}

HeaderImage.propTypes = {
  image: PropTypes.string.isRequired,
}

export default HeaderImage
