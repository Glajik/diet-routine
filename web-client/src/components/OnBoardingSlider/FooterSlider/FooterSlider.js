import React from 'react'

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

export default FooterSlider
