import React from 'react'

import { Drawer } from 'antd'
import HeaderDrawer from '../MyComponents/HeaderDrawer/HeaderDrawer'
import styled from './ForgotPassword.module.css'
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import { useSelector } from 'react-redux'

const ForgotPassword = ({ onClose }) => {
  const isClick = useSelector(state => state.drawer.isForgotPass)
  return (
    <Drawer
      placement="bottom"
      closable={false}
      visible={isClick}
      onClose={onClose}
      key="bottom"
      height="392px">
      <div className={styled.container}>
        <HeaderDrawer text="Password assistance" />
        <div className={styled.explanationText}>
          Enter your email to recover your password. You will receive an email with
          instructions
        </div>
        <ForgotPasswordForm />
        <QuestionFooter />
      </div>
    </Drawer>
  )
}

export default ForgotPassword
