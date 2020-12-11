import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleSignup } from '../../../redux/actions/drawerActions'
import styled from '../OnboardingPage.module.css'

const ButtonGroup = () => {
  const history = useHistory()

  const dispatch = useDispatch()

  const handleTryOut = () => console.log('Try out')
  const handleSignUp = () => dispatch(handleSignup())

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
