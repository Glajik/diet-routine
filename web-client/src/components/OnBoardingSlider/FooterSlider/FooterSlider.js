import React from 'react'
import PropTypes from 'prop-types'

import styled from './FooterSlider.module.css'
import GreenLittleButton from './GreenLittleButton/GreenLittleButton'
import SkipButton from './SkipButton/SkipButton'

const FooterSlider = ({ next, btnText }) => {
  return (
    <div className={styled.wrapper}>
      <SkipButton />
      <GreenLittleButton text={btnText} next={next} />
    </div>
  )
}

FooterSlider.propTypes = {
  btnText: PropTypes.string.isRequired,
  next: PropTypes.func.isRequired,
}

export default FooterSlider
