import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from './SkipButton.module.css'

const SkipButton = () => {
  const history = useHistory()

  const handleSkip = () => history.push('/main')
  return (
    <p className={styled.link} onClick={handleSkip}>
      Skip
    </p>
  )
}

export default SkipButton
