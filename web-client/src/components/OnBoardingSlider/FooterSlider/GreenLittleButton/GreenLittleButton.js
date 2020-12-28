import React from 'react'
import PropTypes from 'prop-types'

import styled from './GreenLittleButton.module.css'

const GreenLittleButton = ({ text, onClick }) => {
  return (
    <button className={styled.greenButton} onClick={onClick}>
      {text}
    </button>
  )
}

GreenLittleButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default GreenLittleButton
