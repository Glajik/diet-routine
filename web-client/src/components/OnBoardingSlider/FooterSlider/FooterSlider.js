import React from 'react'
import PropTypes from 'prop-types'

import styled from './FooterSlider.module.css'
import GreenLittleButton from './GreenLittleButton/GreenLittleButton'
import SkipButton from './SkipButton/SkipButton'

const Spacer = () => <span> </span>

const FooterSlider = ({ btnText, onNext, onSkip }) => {
  return (
    <div className={styled.wrapper}>
      {onSkip ? <SkipButton onClick={onSkip}/> : <Spacer /> }
      <GreenLittleButton text={btnText} onClick={onNext} />
    </div>
  )
}

FooterSlider.propTypes = {
  btnText: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onSkip: PropTypes.func,
}

export default FooterSlider
