import React from 'react'

import styled from './Login.module.css'

import LoginForm from './LoginForm/LoginForm'
import QuestionFooter from './QuestionFooter/QuestionFooter'
import HeaderDrawer from '../MyComponents/HeaderDrawer/HeaderDrawer'
import { Drawer } from 'antd'
import { useSelector } from 'react-redux'

const Login = ({ onClose }) => {
  const isClick = useSelector(state => state.drawer.islogin)
  return (
    <Drawer
      placement="bottom"
      closable={false}
      visible={isClick}
      onClose={onClose}
      key="bottom"
      height="376px">
      <div className={styled.container}>
        <HeaderDrawer text="Login" />
        <LoginForm />
        <QuestionFooter />
      </div>
    </Drawer>
  )
}

export default Login
