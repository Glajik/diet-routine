import React from 'react'
import PropTypes from 'prop-types'
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
      height="475px">
      <div className={styled.container}>
        <HeaderDrawer text="Login" />
        <LoginForm />
        <QuestionFooter />
      </div>
    </Drawer>
  )
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default Login
