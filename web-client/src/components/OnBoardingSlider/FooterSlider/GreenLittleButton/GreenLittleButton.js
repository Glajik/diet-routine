import React from 'react'
import PropTypes from 'prop-types'

import styled from './GreenLittleButton.module.css'

const GreenLittleButton = ({ text, next }) => {
  return (
    <button className={styled.greenButton} onClick={next}>
      {text}
    </button>
  )
}

GreenLittleButton.propTypes = {
  text: PropTypes.string.isRequired,
  next: PropTypes.func.isRequired,
}

export default GreenLittleButton
