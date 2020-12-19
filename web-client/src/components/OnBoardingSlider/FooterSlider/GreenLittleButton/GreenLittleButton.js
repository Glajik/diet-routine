import React from 'react'

import styled from './GreenLittleButton.module.css'

const GreenLittleButton = ({ text, next }) => {
  return (
    <button className={styled.greenButton} onClick={next}>
      {text}
    </button>
  )
}

export default GreenLittleButton
