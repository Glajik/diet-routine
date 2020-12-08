import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from '../OnboardingPage.module.css'

const ButtonGroup = () => {
  const history = useHistory()
  const handleTryOut = () => history.push('/info_slider')
  const handleSignUp = () => history.push('/signup')
  return (
    <div className={styled.btnGroup}>
      <button className={styled.greenBtn} onClick={handleTryOut}>
        Try out now
      </button>
      <button className={styled.whiteBtn} onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  )
}

export default ButtonGroup
