import React from 'react'

import HeaderDrawer from '../MyComponents/HeaderDrawer/HeaderDrawer'
import SignUpForm from './SignUpForm/SignUpForm'
import styled from './SignUp.module.css'
import QuestionFooter from '../OnboardingPage/QuestionFooter/QuestionFooter'
import { Drawer } from 'antd'
import { useSelector } from 'react-redux'

function SignUp({ onClose }) {
  const isClick = useSelector(state => state.drawer.isSignup)
  return (
    <Drawer
      placement="bottom"
      closable={false}
      visible={isClick}
      onClose={onClose}
      key="bottom"
      height="475px">
      <div className={styled.container}>
        <HeaderDrawer text="Sign up" />
        <SignUpForm />
        <QuestionFooter />
      </div>
    </Drawer>
  )
}

export default SignUp
