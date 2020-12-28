import React from 'react'
import PropTypes from 'prop-types'

import styled from './FooterSlider.module.css'
import GreenLittleButton from './GreenLittleButton/GreenLittleButton'
import SkipButton from './SkipButton/SkipButton'

const Spacer = () => <span> </span>

const FooterSlider = ({ next, btnText, isLast }) => {
  return (
    <div className={styled.wrapper}>
      {!isLast ? <SkipButton /> : <Spacer /> }
      <GreenLittleButton text={btnText} next={next} />
    </div>
  )
}

FooterSlider.propTypes = {
  btnText: PropTypes.string.isRequired,
  next: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
}

export default FooterSlider
