import React from 'react'
import { Button } from 'antd'
import styled from '../OnboardingPage.module.css'

const ButtonGroup = () => {
  const handlerTryOut = () => console.log('Try out')
  const handlerSignUp = () => console.log('Sign up')
  return (
    <div className={styled.btnGroup}>
      <Button className={styled.greenBtn} onClick={handlerTryOut}>
        Try out now
      </Button>
      <Button className={styled.whiteBtn} onClick={handlerSignUp}>
        Sign up
      </Button>
    </div>
  )
}

export default ButtonGroup
